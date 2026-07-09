import { VideoMockup } from '@/components/player/VideoMockup'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

import styles from './HeroSection.module.scss'

const heroStats = [
  { label: 'Player concepts', value: '04' },
  { label: 'UI states', value: '18+' },
  { label: 'Runtime', value: 'Mock only' },
]

export function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.copy}>
        <Badge tone="teal">Premium Video.js portfolio concept</Badge>
        <h1>Video.js Player Lab</h1>
        <p>
          A polished dark interface for experimenting with player layouts, playlists, analytics
          surfaces and product-grade media controls before the real Video.js runtime is connected.
        </p>
        <div className={styles.actions}>
          <Button href="#featured-players">View players</Button>
          <Button href="#tech-stack" variant="secondary">
            Explore stack
          </Button>
        </div>
        <dl className={styles.stats}>
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <VideoMockup />
    </section>
  )
}
