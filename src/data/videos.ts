import type { Video } from '@/types/video'

export const videos: Video[] = [
  {
    id: 'intro',
    title: 'PlayerOS overview',
    duration: '02:18',
    category: 'Overview',
    status: 'ready',
    accent: 'teal',
  },
  {
    id: 'controls',
    title: 'Control preset walkthrough',
    duration: '04:42',
    category: 'Preset',
    status: 'ready',
    accent: 'amber',
  },
  {
    id: 'playlist',
    title: 'Playlist preview state',
    duration: '03:07',
    category: 'Playlist',
    status: 'draft',
    accent: 'coral',
  },
]
