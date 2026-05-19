import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
