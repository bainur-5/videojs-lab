import { Badge } from '@/components/ui/Badge'

import styles from './CaseStudySection.module.scss'

export function CaseStudySection() {
  return (
    <section className={styles.section} id="case-study">
      <div className={styles.header}>
        <Badge tone="amber">Example workflow</Badge>
        <h2>From one-off embeds to a reusable player system.</h2>
      </div>
      <div className={styles.columns}>
        <div>
          <span>Before</span>
          <p>Teams copy player markup between pages and adjust visual details in each screen.</p>
        </div>
        <div>
          <span>After</span>
          <p>PlayerOS keeps presets, playlist preview, and page sections in predictable modules.</p>
        </div>
      </div>
    </section>
  )
}
