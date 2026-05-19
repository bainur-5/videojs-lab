import { useEffect, useRef, useState } from 'react'
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts'
import type { VideoAnalyticsEvent } from '../../hooks/useVideoAnalytics'
import styles from './BaseVideoPlayer.module.scss'

type VideoJsSource = {
  src: string
  type: string
}

type VideoJsPlayer = {
  currentTime: (seconds?: number) => number
  dispose: () => void
  isDisposed: () => boolean
  off: (event: string, handler: () => void) => void
  on: (event: string, handler: () => void) => void
  pause: () => void
  paused: () => boolean
  play: () => Promise<void> | void
}

type VideoJsFactory = (
  element: HTMLVideoElement,
  options: Record<string, unknown>,
) => VideoJsPlayer

declare global {
  interface Window {
    videojs?: VideoJsFactory
  }
}

interface BaseVideoPlayerProps {
  title: string
  poster: string
  source: string
  onAnalyticsEvent?: (event: VideoAnalyticsEvent) => void
}

const videoJsScriptUrl = 'https://vjs.zencdn.net/8.23.4/video.min.js'
const videoJsStylesUrl = 'https://vjs.zencdn.net/8.23.4/video-js.css'

function loadVideoJs() {
  if (window.videojs) {
    return Promise.resolve(window.videojs)
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${videoJsScriptUrl}"]`,
  )

  const stylesheetExists = document.querySelector(`link[href="${videoJsStylesUrl}"]`)

  if (!stylesheetExists) {
    const link = document.createElement('link')
    link.href = videoJsStylesUrl
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  return new Promise<VideoJsFactory>((resolve, reject) => {
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.videojs as VideoJsFactory), {
        once: true,
      })
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = videoJsScriptUrl
    script.async = true
    script.onload = () => resolve(window.videojs as VideoJsFactory)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export function BaseVideoPlayer({ onAnalyticsEvent, poster, source, title }: BaseVideoPlayerProps) {
  const playerRef = useRef<VideoJsPlayer | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let isMounted = true

    loadVideoJs()
      .then((videojs) => {
        if (!videoRef.current || !isMounted) {
          return
        }

        const player = videojs(videoRef.current, {
          autoplay: false,
          controls: true,
          fluid: true,
          playbackRates: [0.5, 1, 1.25, 1.5, 2],
          poster,
          preload: 'metadata',
          responsive: true,
          sources: [{ src: source, type: 'video/mp4' } satisfies VideoJsSource],
        })

        const eventMap: Array<[string, VideoAnalyticsEvent]> = [
          ['play', 'play'],
          ['pause', 'pause'],
          ['seeking', 'seek'],
          ['ended', 'ended'],
        ]

        eventMap.forEach(([videoEvent, analyticsEvent]) => {
          player.on(videoEvent, () => onAnalyticsEvent?.(analyticsEvent))
        })

        playerRef.current = player
        setIsReady(true)
      })
      .catch(() => setLoadError(true))

    return () => {
      isMounted = false
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [onAnalyticsEvent, poster, source])

  useKeyboardShortcuts({
    onSeekBackward: () => {
      const player = playerRef.current
      if (player) {
        player.currentTime(Math.max(0, player.currentTime() - 10))
      }
    },
    onSeekForward: () => {
      const player = playerRef.current
      if (player) {
        player.currentTime(player.currentTime() + 10)
      }
    },
    onTogglePlayback: () => {
      const player = playerRef.current
      if (!player) {
        return
      }

      if (player.paused()) {
        void player.play()
      } else {
        player.pause()
      }
    },
  })

  return (
    <div className={styles.videoPlayer} data-ready={isReady}>
      <video
        aria-label={title}
        className={`video-js vjs-big-play-centered vjs-theme-lab ${styles.videoJs}`}
        playsInline
        ref={videoRef}
      />
      {!isReady && !loadError ? (
        <span className={styles.videoPlayerStatus}>Loading Video.js...</span>
      ) : null}
      {loadError ? (
        <span className={[styles.videoPlayerStatus, styles.error].join(' ')}>
          Video.js could not be loaded. Check your connection and try again.
        </span>
      ) : null}
    </div>
  )
}
