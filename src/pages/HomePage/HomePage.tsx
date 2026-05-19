import { featuredPlayerDemos } from '../../data/players'
import { PlayerCard } from '../../components/video/PlayerCard'
import { PlayerShell } from '../../components/video/PlayerShell'
import { Button } from '../../components/ui/Button/Button'
import { Card } from '../../components/ui/Card'
import { SectionTitle } from '../../components/ui/SectionTitle'
import cls from './HomePage.module.scss'
import { IconGitHub } from '../../components/icon/IconGitHub'

interface HomePageProps {
  onNavigate: (page: string) => void
}

const technologies = ['React', 'TypeScript', 'Vite', 'Video.js', 'Plain CSS', 'Mock data']

export function HomePage({ onNavigate }: HomePageProps) {
  const workingPlayer = featuredPlayerDemos[0]

  return (
    <>
      <section className={cls.heroSection}>
        <div className={cls.heroSectionContent}>
          <span className={cls.eyebrow}>Portfolio case study</span>
          <h1>Custom Video.js players built like product features.</h1>
          <p>
            Video.js Lab is a frontend architecture showcase for advanced media-player UI,
            reusable React components, keyboard UX, playlists and analytics-ready event tracking.
          </p>
          <div className={cls.heroSectionActions}>
            <Button onClick={() => onNavigate('players')}>Explore players</Button>
            <a href="https://github.com/videojs/video.js" target="_blank" rel="noreferrer" className={cls.githubLink}>
              View GitHub <IconGitHub width={20} height={20} color="currentColor" />
            </a>
          </div>
        </div>
        <Card as="div" className={cls.heroPanel}>
          <div className={cls.heroSlider}>
            <div className={cls.heroSliderInner} style={{ backgroundImage: `url(${workingPlayer.poster})` }} />
          </div>
        </Card>
      </section>

      <section className={cls.contentSection}>
        <SectionTitle
          eyebrow="Stack"
          title="Built with modern frontend fundamentals"
          description="The project stays intentionally frontend-only so the focus remains on UI architecture, media behavior and portfolio-ready implementation details."
        />
        <div className={cls.techGrid}>
          {technologies.map((technology) => (
            <Card as="div" className={cls.techCard} key={technology}>
              {technology}
            </Card>
          ))}
        </div>
      </section>

      <PlayerShell player={workingPlayer} />

      <section className={cls.contentSection}>
        <SectionTitle
          eyebrow="Featured demos"
          title="A roadmap for real media-product interfaces"
          description="Each demo is modeled as a portfolio case-study slice with a clear frontend skill focus."
        />
        <div className={cls.cardGrid}>
          {featuredPlayerDemos.map((player) => (
            <PlayerCard key={player.id} onOpen={() => onNavigate('players')} player={player} />
          ))}
        </div>
      </section>
    </>
  )
}
