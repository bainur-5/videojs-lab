import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { AnalyticsSection } from '@/components/sections/AnalyticsSection'
import { CaseStudySection } from '@/components/sections/CaseStudySection'
import { CtaSection } from '@/components/sections/CtaSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlayerPresetsSection } from '@/components/sections/PlayerPresetsSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PlayerPresetsSection />
        <FeaturesSection />
        <AnalyticsSection />
        <CaseStudySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
