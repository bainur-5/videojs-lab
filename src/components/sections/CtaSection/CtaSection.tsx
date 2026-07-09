import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

import styles from './CTASection.module.scss'

export function CTASection() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.panel}>
        <div className={styles.copy}>
          <Badge tone="neutral">Next milestone</Badge>
          <h2>Keep the landing page premium. Wire Video.js after the UI feels complete.</h2>
          <p>
            The main page now sells the product idea with static mockups only, leaving a clean
            boundary for the real player integration later.
          </p>
        </div>
        <div className={styles.actions}>
          <Button href="#top">Back to hero</Button>
          <Button href="#featured-players" variant="secondary">
            Review players
          </Button>
        </div>
      </div>
    </section>
  )
}
