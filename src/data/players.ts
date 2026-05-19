export type PlayerDemoStatus = 'ready' | 'planned'

export interface PlayerDemo {
  id: string
  title: string
  eyebrow: string
  description: string
  skill: string
  status: PlayerDemoStatus
  tags: string[]
  source: string
  poster: string
}

export const playerDemos: PlayerDemo[] = [
  {
    id: 'basic-custom-player',
    title: 'Basic custom Video.js player',
    eyebrow: 'Foundation',
    description:
      'A reusable Video.js wrapper with lifecycle-safe setup, typed options and a branded presentation shell.',
    skill: 'React integration, Video.js lifecycle management and reusable component APIs.',
    status: 'ready',
    tags: ['Video.js', 'Reusable component', 'Responsive video'],
    source: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://vjs.zencdn.net/v/oceans.png',
  },
  {
    id: 'youtube-style-player',
    title: 'YouTube-style player',
    eyebrow: 'Custom controls',
    description:
      'A social video experience prepared for custom controls, keyboard shortcuts and engagement actions.',
    skill: 'Custom UI composition, shortcuts, progress affordances and interaction design.',
    status: 'planned',
    tags: ['Custom controls', 'Keyboard UX', 'Actions'],
    source: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'course-playlist-player',
    title: 'Course player with playlist',
    eyebrow: 'Learning UX',
    description:
      'A course-player concept with playlist modules, progress states and lesson metadata.',
    skill: 'Playlist architecture, stateful lessons and education-product UI patterns.',
    status: 'planned',
    tags: ['Playlist', 'Course UI', 'Progress'],
    source: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'premium-movie-player',
    title: 'Premium movie-style player',
    eyebrow: 'Cinematic UI',
    description:
      'A high-polish entertainment-player concept with theatrical styling and metadata overlays.',
    skill: 'Visual polish, immersive layouts, metadata surfaces and responsive detail density.',
    status: 'planned',
    tags: ['Cinema UI', 'Metadata', 'Premium polish'],
    source: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'analytics-player',
    title: 'Analytics player',
    eyebrow: 'Instrumentation',
    description:
      'A metrics-focused player prepared to track play, pause, seek, ended and watch-time events.',
    skill: 'Event instrumentation, analytics state modeling and product telemetry thinking.',
    status: 'planned',
    tags: ['Analytics', 'Events', 'Watch time'],
    source: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
]

export const featuredPlayerDemos = playerDemos.slice(0, 3)
