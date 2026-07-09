import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
// import { CTASection } from '@/components/sections/CTASection'
import { FeaturedPlayers } from '@/components/sections/FeaturedPlayers'
import { HeroSection } from '@/components/sections/HeroSection'
import { TechStack } from '@/components/sections/TechStack'

import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <TechStack />
        <FeaturedPlayers />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  )
}
