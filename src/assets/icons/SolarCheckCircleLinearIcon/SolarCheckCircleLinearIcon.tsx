import type { SVGProps } from 'react'

import styles from './SolarCheckCircleLinearIcon.module.scss'

type SolarCheckCircleLinearIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function SolarCheckCircleLinearIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.5,
  className = '',
  ...props
}: SolarCheckCircleLinearIconProps) {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8.5 12.5L10.5 14.5L15.5 9.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
