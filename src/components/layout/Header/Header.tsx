import { Button } from '@/components/ui/Button'
import { EpRightIcon, MynauiGithubIcon as GitHubIcon, GlyphsSeekSkipIcon, HugeiconsCheckmarkCircle04Icon, MaterialSymbolsLightKeyboardOutlineIcon, MaterialSymbolsLightPauseOutlineRoundedIcon, PhArrowSquareOutLightIcon, QlementineIconsMovie16Icon, SolarPlaylistOutlineIcon, StreamlineLayers1Icon } from '@/assets/icons'

import styles from './Header.module.scss'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Players', href: '/players' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Case study', href: '#case-study' },
]

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="PlayerOS home">
          <MaterialSymbolsLightPauseOutlineRoundedIcon />
        <div className={styles.logoIcon} aria-hidden="true">
        </div>
        Player<span>OS</span>
      </a>
      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="https://github.com/bainur-5" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <GitHubIcon size={14}/>
          GitHub
        </a>
      </nav>
      <Button href="#cta" variant="primary" className={styles.action}>
        Experlore Player
      </Button>
    </header>
  )
}
