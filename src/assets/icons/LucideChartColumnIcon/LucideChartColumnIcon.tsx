import type { SVGProps } from 'react'

import styles from './LucideChartColumnIcon.module.scss'

type LucideChartColumnIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function LucideChartColumnIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: LucideChartColumnIconProps) {
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
        d="M1 1V20.5556C1 21.2039 1.25754 21.8256 1.71596 22.284C2.17438 22.7425 2.79614 23 3.44444 23H23M19.3333 18.1111V8.33333M13.2222 18.1111V3.44444M7.11111 18.1111V14.4444"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
