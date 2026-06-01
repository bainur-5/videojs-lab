import type { SVGProps } from 'react'

import styles from './EpRightIcon.module.scss'

type EpRightIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function EpRightIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: EpRightIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={[styles.icon, className].filter(Boolean).join(' ')}
      color={color}
      fill="none"
      strokeWidth={strokeWidth}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M17.6906 11.25H3.75C3.55109 11.25 3.36032 11.329 3.21967 11.4696C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3896 3.21967 12.5303C3.36032 12.6709 3.55109 12.75 3.75 12.75H17.6906L12.218 18.2179C12.0769 18.359 11.9976 18.5504 11.9976 18.75C11.9976 18.9495 12.0769 19.1409 12.218 19.282C12.3591 19.4231 12.5504 19.5024 12.75 19.5024C12.9495 19.5024 13.1409 19.4231 13.282 19.282L20.032 12.532C20.1022 12.4623 20.1579 12.3794 20.1959 12.2881C20.2338 12.1968 20.2534 12.0989 20.2534 12C20.2534 11.9011 20.2338 11.8031 20.1959 11.7118C20.1579 11.6205 20.1022 11.5376 20.032 11.4679L13.282 4.71793C13.2122 4.64807 13.1292 4.59264 13.0379 4.55483C12.9466 4.51702 12.8488 4.49756 12.75 4.49756C12.6512 4.49756 12.5534 4.51702 12.4621 4.55483C12.3708 4.59264 12.2878 4.64807 12.218 4.71793C12.1481 4.7878 12.0927 4.87074 12.0549 4.96203C12.0171 5.05332 11.9976 5.15116 11.9976 5.24996C11.9976 5.34877 12.0171 5.44661 12.0549 5.5379C12.0927 5.62918 12.1481 5.71213 12.218 5.782L17.6906 11.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
