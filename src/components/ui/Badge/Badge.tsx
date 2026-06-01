import type { ReactNode } from 'react'

import styles from './Badge.module.scss'

type BadgeProps = {
  children: ReactNode
  tone?: 'teal' | 'coral' | 'amber' | 'neutral'
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={[styles.badge, styles[tone]].join(' ')}>{children}</span>
}
