import { useCallback, useRef, useState } from 'react'

export type VideoAnalyticsEvent = 'play' | 'pause' | 'seek' | 'ended'

export interface VideoAnalyticsSnapshot {
  eventCounts: Record<VideoAnalyticsEvent, number>
  lastEvent: VideoAnalyticsEvent | 'idle'
  watchTime: number
}

const initialCounts: Record<VideoAnalyticsEvent, number> = {
  play: 0,
  pause: 0,
  seek: 0,
  ended: 0,
}

export function useVideoAnalytics() {
  const playStartedAt = useRef<number | null>(null)
  const [snapshot, setSnapshot] = useState<VideoAnalyticsSnapshot>({
    eventCounts: initialCounts,
    lastEvent: 'idle',
    watchTime: 0,
  })

  const flushWatchTime = useCallback(() => {
    if (!playStartedAt.current) {
      return 0
    }

    const elapsed = Math.max(0, (Date.now() - playStartedAt.current) / 1000)
    playStartedAt.current = null
    setSnapshot((current) => ({
      ...current,
      watchTime: Number((current.watchTime + elapsed).toFixed(1)),
    }))

    return elapsed
  }, [])

  const track = useCallback(
    (event: VideoAnalyticsEvent) => {
      if (event === 'play') {
        playStartedAt.current = Date.now()
      }

      if (event === 'pause' || event === 'seek' || event === 'ended') {
        flushWatchTime()
      }

      setSnapshot((current) => ({
        ...current,
        eventCounts: {
          ...current.eventCounts,
          [event]: current.eventCounts[event] + 1,
        },
        lastEvent: event,
      }))
    },
    [flushWatchTime],
  )

  return { flushWatchTime, snapshot, track }
}
