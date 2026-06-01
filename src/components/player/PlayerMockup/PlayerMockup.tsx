import { videos } from '@/data/videos'
import { PlaylistPreview } from '@/components/player/PlaylistPreview'

import styles from './PlayerMockup.module.scss'

export function PlayerMockup() {
  const featuredVideo = videos[0]

  return (
    <div className={styles.mockup}>
      <div className={styles.player} data-accent={featuredVideo.accent}>
        <div className={styles.topBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.stage}>
          <div className={styles.playButton} aria-hidden="true" />
          <div>
            <p className={styles.eyebrow}>{featuredVideo.category}</p>
            <h3>{featuredVideo.title}</h3>
          </div>
        </div>
        <div className={styles.controls}>
          <span className={styles.progress} />
          <span>{featuredVideo.duration}</span>
        </div>
      </div>
      <PlaylistPreview videos={videos} />
    </div>
  )
}
