import { useEffect } from 'react'

interface KeyboardShortcutsOptions {
  onTogglePlayback?: () => void
  onSeekBackward?: () => void
  onSeekForward?: () => void
}

export function useKeyboardShortcuts({
  onSeekBackward,
  onSeekForward,
  onTogglePlayback,
}: KeyboardShortcutsOptions) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null

      if (target?.matches('input, textarea, select, [contenteditable="true"]')) {
        return
      }

      if (event.code === 'Space') {
        event.preventDefault()
        onTogglePlayback?.()
      }

      if (event.code === 'ArrowLeft') {
        onSeekBackward?.()
      }

      if (event.code === 'ArrowRight') {
        onSeekForward?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onSeekBackward, onSeekForward, onTogglePlayback])
}
