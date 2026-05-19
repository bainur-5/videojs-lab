import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header/Header'
import styles from './PageLayout.module.scss'

interface PageLayoutProps {
  activePage: string
  children: ReactNode
  onNavigate: (page: string) => void
}

export function PageLayout({ activePage, children, onNavigate }: PageLayoutProps) {
  return (
    <div className={styles.appShell}>
      <Header activePage={activePage} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
