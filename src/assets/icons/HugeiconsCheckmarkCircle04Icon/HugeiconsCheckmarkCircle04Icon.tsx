import type { SVGProps } from 'react'

import styles from './HugeiconsCheckmarkCircle04Icon.module.scss'

type HugeiconsCheckmarkCircle04IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function HugeiconsCheckmarkCircle04Icon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.5,
  className = '',
  ...props
}: HugeiconsCheckmarkCircle04IconProps) {
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
        d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.5 9.5L12 13L21 3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
