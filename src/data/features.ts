export type Feature = {
  title: string
  description: string
}

export const features: Feature[] = [
  {
    title: 'Preset-based setup',
    description:
      'Keep controls, captions, poster treatment, and branding consistent across every player surface.',
  },
  {
    title: 'Playlist-ready layout',
    description:
      'Show a focused video area with a simple playlist preview that can later connect to real content data.',
  },
  {
    title: 'Video.js boundary',
    description:
      'The player component is isolated so a real Video.js integration can be added without reshaping the page.',
  },
  {
    title: 'Static first',
    description:
      'The landing page is intentionally frontend-only and easy to edit before any backend or player runtime exists.',
  },
]
