import { Badge } from '@/components/ui/Badge'

import styles from './TechStack.module.scss'

const stackItems = [
  {
    name: 'Next.js',
    label: 'App Router',
    description: 'Route-first structure for a clean portfolio landing page and future lab routes.',
  },
  {
    name: 'TypeScript',
    label: 'Typed UI',
    description: 'Strict component contracts for video data, presets and player state.',
  },
  {
    name: 'SCSS Modules',
    label: 'Scoped CSS',
    description: 'Premium visual styling without leaking section styles across the app.',
  },
  {
    name: 'Video.js',
    label: 'Prepared',
    description: 'The runtime is intentionally not wired yet, but the UI boundary is ready.',
  },
]

export function TechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.header}>
        <Badge tone="amber">Tech stack</Badge>
        <h2>Built like a real player product, even while the demo stays static.</h2>
        <p>
          The first version focuses on structure, visual quality and component ownership before
          connecting a media runtime.
        </p>
      </div>
      <div className={styles.grid}>
        {stackItems.map((item) => (
          <article className={styles.card} key={item.name}>
            <span>{item.label}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
