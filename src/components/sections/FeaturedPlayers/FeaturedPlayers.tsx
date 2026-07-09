import { Badge } from '@/components/ui/Badge'

import styles from './FeaturedPlayers.module.scss'

const playerCards = [
  {
    name: 'Showcase Player',
    category: 'Portfolio',
    description: 'A cinematic layout for launch reels, project trailers and polished case studies.',
    details: ['Poster-first stage', 'Premium controls', 'Brand overlays'],
    tone: 'teal',
  },
  {
    name: 'Course Player',
    category: 'Education',
    description: 'A focused learning player concept with chapter previews and progress states.',
    details: ['Playlist rail', 'Captions area', 'Lesson progress'],
    tone: 'amber',
  },
  {
    name: 'Analytics Player',
    category: 'Insights',
    description: 'A demo concept for watch events, completion tracking and engagement dashboards.',
    details: ['Event log', 'Watch time', 'Completion metric'],
    tone: 'coral',
  },
]

export function FeaturedPlayers() {
  return (
    <section className={styles.section} id="featured-players">
      <div className={styles.header}>
        <Badge tone="teal">Featured players</Badge>
        <h2>Three player concepts ready for the next Video.js pass.</h2>
      </div>
      <div className={styles.grid}>
        {playerCards.map((player) => (
          <article className={styles.card} data-tone={player.tone} key={player.name}>
            <div className={styles.visual}>
              <span />
            </div>
            <div className={styles.content}>
              <p>{player.category}</p>
              <h3>{player.name}</h3>
              <span>{player.description}</span>
              <ul>
                {player.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
