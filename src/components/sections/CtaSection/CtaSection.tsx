import { Button } from '@/components/ui/Button'

import styles from './CtaSection.module.scss'

export function CtaSection() {
  return (
    <section className={styles.section} id="cta">
      <div>
        <h2>Ready for the first real player pass.</h2>
        <p>
          The landing page is static for now, with clean folders prepared for Video.js integration
          when the player requirements are settled.
        </p>
      </div>
      <Button href="#top">Back to top</Button>
    </section>
  )
}
