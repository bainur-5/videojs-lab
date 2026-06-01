import type { SVGProps } from 'react'

import styles from './TablerClockIcon.module.scss'

type TablerClockIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function TablerClockIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: TablerClockIconProps) {
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
        d="M1.83733 16.2095C1.28452 14.8749 1 13.4445 1 12C1 9.08262 2.15893 6.28473 4.22183 4.22183C6.28473 2.15893 9.08262 1 12 1C14.9174 1 17.7153 2.15893 19.7782 4.22183C21.8411 6.28473 23 9.08262 23 12C23 13.4445 22.7155 14.8749 22.1627 16.2095C21.6099 17.5441 20.7996 18.7567 19.7782 19.7782C18.7567 20.7996 17.5441 21.6099 16.2095 22.1627C14.8749 22.7155 13.4445 23 12 23C10.5555 23 9.12506 22.7155 7.79048 22.1627C6.4559 21.6099 5.24327 20.7996 4.22183 19.7782C3.20038 18.7567 2.39013 17.5441 1.83733 16.2095Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.88904V12.0001L15.6667 15.6668"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
