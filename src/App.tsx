import { useEffect, useState } from 'react'
import { PageLayout } from './components/layout/PageLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage/HomePage'
import { PlayersPage } from './pages/PlayersPage'
import styles from './App.module.scss'
import './styles/globals.scss'

type Page = 'home' | 'players' | 'about'

const pageTitles: Record<Page, string> = {
  about: 'About',
  home: 'Home',
  players: 'Players',
}

function getInitialPage(): Page {
  const hash = window.location.hash.replace('#', '')
  return hash === 'players' || hash === 'about' ? hash : 'home'
}

function App() {
  const [activePage, setActivePage] = useState<Page>(getInitialPage)

  useEffect(() => {
    function handleHashChange() {
      setActivePage(getInitialPage())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function navigate(page: string) {
    const nextPage = page === 'players' || page === 'about' ? page : 'home'
    window.location.hash = nextPage === 'home' ? '' : nextPage
    setActivePage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageLayout activePage={activePage} onNavigate={navigate}>
      {activePage === 'home' ? <HomePage onNavigate={navigate} /> : null}
      {activePage === 'players' ? <PlayersPage /> : null}
      {activePage === 'about' ? <AboutPage /> : null}
      <span className={styles.srOnly} aria-live="polite">
        Current page: {pageTitles[activePage]}
      </span>
    </PageLayout>
  )
}

export default App
