import styles from './VideoMockup.module.scss'

const playlistItems = [
  { title: 'Launch reel', time: '02:18', state: 'Playing' },
  { title: 'Course chapter', time: '08:44', state: 'Queued' },
  { title: 'Analytics demo', time: '04:07', state: 'Draft' },
]

export function VideoMockup() {
  return (
    <aside className={styles.mockup} aria-label="Static video player interface mockup">
      <div className={styles.playerShell}>
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
          <p>lab-preview.videojs</p>
        </div>
        <div className={styles.stage}>
          <div className={styles.status}>Static mockup</div>
          <button className={styles.playButton} type="button" aria-label="Preview play state" />
          <div className={styles.stageCopy}>
            <span>Showcase preset</span>
            <h2>Premium media surface</h2>
            <p>Poster, controls and playlist states are mocked for the landing page.</p>
          </div>
        </div>
        <div className={styles.controls}>
          <span>00:42</span>
          <div className={styles.timeline}>
            <span />
          </div>
          <span>04:18</span>
          <strong>1080p</strong>
        </div>
      </div>
      <div className={styles.sidePanel}>
        <div className={styles.panelHeader}>
          <span>Playlist</span>
          <strong>3 clips</strong>
        </div>
        {playlistItems.map((item) => (
          <article className={styles.playlistItem} key={item.title}>
            <span className={styles.thumbnail} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.time}</p>
            </div>
            <em>{item.state}</em>
          </article>
        ))}
      </div>
    </aside>
  )
}
