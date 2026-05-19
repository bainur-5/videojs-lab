import { Button } from '../../ui/Button/Button'
import cls from './Header.module.scss'

interface HeaderProps {
  activePage: string
  onNavigate: (page: string) => void
}

const navItems = [
  { id: 'players', label: 'Players' },
  { id: 'features', label: 'Features' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'about', label: 'About' },
]

export function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <header className={cls.siteHeader}>
      <button className={cls.brand} type="button" onClick={() => onNavigate('home')}>
        <span className={cls.brandMark} aria-hidden="true" />
        <span>
          <strong>Video.js Lab</strong>
        </span>
      </button>

      <nav className={cls.siteNav} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            aria-current={activePage === item.id ? 'page' : undefined}
            className={cls.siteNavLink}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className={cls.rightLinks}>
        <a
          className={cls.githubLink}
          href="https://github.com/videojs/video.js"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub
        </a>

        <Button variant='primary' onClick={() => onNavigate('players')}>Explore players</Button>
      </div>
    </header>
  )
}
