import type { PlayerDemo } from '../../data/players'
import { Button } from '../ui/Button/Button'
import { Card } from '../ui/Card'
import styles from './PlayerCard.module.scss'

interface PlayerCardProps {
  player: PlayerDemo
  onOpen?: (id: string) => void
}

export function PlayerCard({ onOpen, player }: PlayerCardProps) {
  return (
    <Card className={styles.playerCard}>
      <div className={styles.playerCardMedia}>
        <img alt="" src={player.poster} />
        <span className={[styles.statusPill, styles[player.status]].join(' ')}>
          {player.status === 'ready' ? 'Live demo' : 'Planned'}
        </span>
      </div>
      <div className={styles.playerCardBody}>
        <span className={styles.eyebrow}>{player.eyebrow}</span>
        <h3>{player.title}</h3>
        <p>{player.description}</p>
        <div className={styles.skillCallout}>
          <strong>Skill shown</strong>
          <span>{player.skill}</span>
        </div>
        <ul className={styles.tagList} aria-label={`${player.title} capabilities`}>
          {player.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {player.status === 'ready' ? (
          <Button onClick={() => onOpen?.(player.id)} variant="secondary">
            View working player
          </Button>
        ) : (
          <Button disabled variant="ghost">
            Architecture prepared
          </Button>
        )}
      </div>
    </Card>
  )
}
