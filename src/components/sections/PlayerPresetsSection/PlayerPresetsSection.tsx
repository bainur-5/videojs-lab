import { playerPresets } from '@/data/presets'
import { Badge } from '@/components/ui/Badge'

import styles from './PlayerPresetsSection.module.scss'

export function PlayerPresetsSection() {
  return (
    <section className={styles.section} id="presets">
      <div className={styles.header}>
        <Badge tone="amber">Preset library</Badge>
        <h2>Player styles stay organized from day one.</h2>
      </div>
      <div className={styles.grid}>
        {playerPresets.map((preset) => (
          <article key={preset.name} className={styles.card}>
            <Badge tone={preset.accent}>{preset.label}</Badge>
            <h3>{preset.name}</h3>
            <p>{preset.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
