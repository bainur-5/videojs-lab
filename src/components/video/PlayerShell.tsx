import type { PlayerDemo } from '../../data/players'
import { useVideoAnalytics } from '../../hooks/useVideoAnalytics'
import { Card } from '../ui/Card'
import { BaseVideoPlayer } from './BaseVideoPlayer'
import styles from './PlayerShell.module.scss'

interface PlayerShellProps {
  player: PlayerDemo
}

export function PlayerShell({ player }: PlayerShellProps) {
  const { snapshot, track } = useVideoAnalytics()

  return (
    <section className={styles.playerShell} aria-labelledby={`${player.id}-title`}>
      <div className={styles.playerShellHeader}>
        <div>
          <span className={styles.eyebrow}>Working demo</span>
          <h2 id={`${player.id}-title`}>{player.title}</h2>
          <p>{player.description}</p>
        </div>
        <div className={styles.shortcutHints} aria-label="Keyboard shortcuts">
          <span>Space: Play/Pause</span>
          <span>← / →: Seek 10s</span>
        </div>
      </div>

      <div className={styles.playerShellGrid}>
        <BaseVideoPlayer
          onAnalyticsEvent={track}
          poster={player.poster}
          source={player.source}
          title={player.title}
        />
        <Card as="aside" className={styles.analyticsCard}>
          <span className={styles.eyebrow}>Live telemetry</span>
          <h3>Player events</h3>
          <dl>
            <div>
              <dt>Last event</dt>
              <dd>{snapshot.lastEvent}</dd>
            </div>
            <div>
              <dt>Watch time</dt>
              <dd>{snapshot.watchTime}s</dd>
            </div>
            {Object.entries(snapshot.eventCounts).map(([event, count]) => (
              <div key={event}>
                <dt>{event}</dt>
                <dd>{count}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  )
}
