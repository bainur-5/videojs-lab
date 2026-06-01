import { Button } from '@/components/ui/Button'

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
        <a href="https://github.com/bainur-5" target="_blank" rel="noopener noreferrer">
        
          GitHub
        </a>
      </nav>
      <Button href="#cta" variant="secondary" className={styles.action}>
        Experlore Player
      </Button>
    </header>
  )
}
