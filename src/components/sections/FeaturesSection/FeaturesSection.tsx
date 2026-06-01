import { features } from '@/data/features'
import { Badge } from '@/components/ui/Badge'

import styles from './FeaturesSection.module.scss'

export function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.header}>
        <Badge tone="coral">Frontend pieces</Badge>
        <h2>Simple components, clear ownership.</h2>
        <p>
          The structure keeps layout, sections, player pieces, shared UI, data, and types separate
          so the first Video.js pass has a predictable place to land.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((feature) => (
          <article className={styles.card} key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
