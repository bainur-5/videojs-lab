import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>Video.js Lab - a frontend portfolio case study for custom media experiences.</p>
      <span>React / TypeScript / Vite / Video.js</span>
    </footer>
  )
}
