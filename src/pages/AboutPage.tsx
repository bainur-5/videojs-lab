import { Card } from '../components/ui/Card'
import { SectionTitle } from '../components/ui/SectionTitle'
import styles from './AboutPage.module.scss'

const focusAreas = [
  'Custom video player UI and branded shells',
  'Video.js event handling for play, pause, seek and ended states',
  'Playlist-ready data modeling for course and media-library experiences',
  'Analytics hooks for watch time and interaction telemetry',
]

export function AboutPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <span className={styles.eyebrow}>About</span>
        <h1>A portfolio case study for advanced media interfaces.</h1>
        <p>
          Video.js Lab demonstrates how a frontend engineer can turn a video player into a
          product-quality experience with clean React boundaries, typed data and a scalable UI
          system.
        </p>
      </section>

      <section className={styles.twoColumn}>
        <SectionTitle
          eyebrow="Case-study intent"
          title="Focused on custom player UI, events, playlists and analytics"
          description="This is not a backend platform or a tutorial clone. It is a frontend-only lab for showing architecture, product thinking and implementation quality."
        />
        <Card as="div" className={styles.aboutCard}>
          <h3>What this project proves</h3>
          <ul className={styles.checkList}>
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  )
}
