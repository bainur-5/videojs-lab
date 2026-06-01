import type { SVGProps } from 'react'

import styles from './HumbleiconsVolume2Icon.module.scss'

type HumbleiconsVolume2IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function HumbleiconsVolume2Icon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: HumbleiconsVolume2IconProps) {
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
        d="M6 9H3V15H6L11 19V5L6 9Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M18.5 5.5C19.3539 6.35343 20.0312 7.36674 20.4934 8.48204C20.9555 9.59733 21.1934 10.7928 21.1934 12C21.1934 13.2072 20.9555 14.4027 20.4934 15.518C20.0312 16.6333 19.3539 17.6466 18.5 18.5M15 8C16.0608 9.06088 16.6568 10.4997 16.6568 12C16.6568 13.5003 16.0608 14.9391 15 16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
