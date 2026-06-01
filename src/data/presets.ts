export type PlayerPreset = {
  name: string
  label: string
  description: string
  accent: 'teal' | 'coral' | 'amber'
}

export const playerPresets: PlayerPreset[] = [
  {
    name: 'Launch',
    label: 'Marketing',
    description: 'A clean player treatment for product demos, launches, and announcement pages.',
    accent: 'teal',
  },
  {
    name: 'Course',
    label: 'Education',
    description: 'A calm preset for lesson playlists with captions and simple chapter navigation.',
    accent: 'amber',
  },
  {
    name: 'Showcase',
    label: 'Portfolio',
    description: 'A bold presentation preset for highlight reels, case studies, and creative work.',
    accent: 'coral',
  },
]
