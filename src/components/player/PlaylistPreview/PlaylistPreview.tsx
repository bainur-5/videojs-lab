import type { Video } from '@/types/video'
import { Badge } from '@/components/ui/Badge'

import styles from './PlaylistPreview.module.scss'

type PlaylistPreviewProps = {
  videos: Video[]
}

export function PlaylistPreview({ videos }: PlaylistPreviewProps) {
  return (
    <aside className={styles.playlist} aria-label="Playlist preview">
      <div className={styles.header}>
        <p>Playlist</p>
        <span>{videos.length} videos</span>
      </div>
      <div className={styles.items}>
        {videos.map((video) => (
          <div className={styles.item} key={video.id}>
            <span className={styles.thumbnail} data-accent={video.accent} />
            <div>
              <h3>{video.title}</h3>
              <p>
                {video.category} · {video.duration}
              </p>
            </div>
            <Badge tone={video.status === 'ready' ? 'teal' : 'neutral'}>{video.status}</Badge>
          </div>
        ))}
      </div>
    </aside>
  )
}
