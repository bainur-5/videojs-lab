import type { SVGProps } from 'react'

import styles from './LucideChartLineIcon.module.scss'

type LucideChartLineIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function LucideChartLineIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: LucideChartLineIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={[styles.icon, className].filter(Boolean).join(' ')}
      color={color}
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9L14 14L10 10L7 13"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
