import { playerDemos } from '../data/players'
import { PlayerCard } from '../components/video/PlayerCard'
import { PlayerShell } from '../components/video/PlayerShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import styles from './PlayersPage.module.scss'

export function PlayersPage() {
  const workingPlayer = playerDemos.find((player) => player.status === 'ready') ?? playerDemos[0]

  return (
    <>
      <section className={styles.pageHero}>
        <span className={styles.eyebrow}>Player demos</span>
        <h1>Five Video.js concepts with reusable architecture.</h1>
        <p>
          The first player is implemented as a working reusable Video.js component. The remaining
          cards define the roadmap, data shape and UI boundaries for the next portfolio demos.
        </p>
      </section>

      <PlayerShell player={workingPlayer} />

      <section className={styles.contentSection} id="players">
        <SectionTitle
          eyebrow="Demo catalog"
          title="Custom players prepared for expansion"
          description="Use these cards as implementation briefs for the next Video.js experiences."
        />
        <div className={styles.cardGrid}>
          {playerDemos.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    </>
  )
}
