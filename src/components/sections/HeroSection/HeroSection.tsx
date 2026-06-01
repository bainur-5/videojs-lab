import { PlayerMockup } from '@/components/player/PlayerMockup'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.copy}>
        <Badge tone="teal">Next.js App Router foundation</Badge>
        <h1>PlayerOS</h1>
        <p>
          A clean static landing page architecture for a future Video.js product, with the
          player, presets, sections, and shared UI already separated into edit-friendly folders.
        </p>
        <div className={styles.actions}>
          <Button href="#presets">View presets</Button>
          <Button href="#features" variant="secondary">
            Explore structure
          </Button>
        </div>
      </div>
      <PlayerMockup />
    </section>
  )
}
