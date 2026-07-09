import { Button } from '@/components/ui/Button'
import {
  MaterialSymbolsLightPauseOutlineRoundedIcon,
  MynauiGithubIcon as GitHubIcon,
} from '@/assets/icons'

import styles from './Header.module.scss'

const navItems = [
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Players', href: '#featured-players' },
  { label: 'Launch', href: '#cta' },
]

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="Video.js Player Lab home">
        <span className={styles.logoIcon} aria-hidden="true">
          <MaterialSymbolsLightPauseOutlineRoundedIcon size={18} />
        </span>
        Video.js <span>Lab</span>
      </a>
      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a
          href="https://github.com/bainur-5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <GitHubIcon size={14} />
          GitHub
        </a>
      </nav>
      <Button href="#cta" variant="primary" className={styles.action}>
        View concept
      </Button>
    </header>
  )
}
