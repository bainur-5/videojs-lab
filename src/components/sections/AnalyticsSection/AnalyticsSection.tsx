import { Badge } from '@/components/ui/Badge'

import styles from './AnalyticsSection.module.scss'

const metrics = [
  { label: 'Player starts', value: '12.4k' },
  { label: 'Avg. completion', value: '68%' },
  { label: 'Captions enabled', value: '31%' },
]

export function AnalyticsSection() {
  return (
    <section className={styles.section} id="analytics">
      <div className={styles.copy}>
        <Badge tone="teal">Analytics-ready view</Badge>
        <h2>Keep the analytics surface separate from the player runtime.</h2>
        <p>
          This static section sketches the UI boundary for player reporting without adding backend
          code or pretending the data is wired up.
        </p>
      </div>
      <div className={styles.panel} aria-label="Static analytics preview">
        {metrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
