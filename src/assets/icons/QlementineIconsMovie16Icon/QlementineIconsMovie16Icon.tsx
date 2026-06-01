import type { SVGProps } from 'react'

import styles from './QlementineIconsMovie16Icon.module.scss'

type QlementineIconsMovie16IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function QlementineIconsMovie16Icon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: QlementineIconsMovie16IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1.5C3.51 1.5 1.5 3.51 1.5 6V16.5C1.5 18.99 3.51 21 6 21H18C20.49 21 22.5 18.99 22.5 16.5V6C22.5 3.51 20.49 1.5 18 1.5H6ZM3 10.5V7.5H6V10.5H3ZM3 6H6V3C4.35 3 3 4.3425 3 6ZM7.5 3H16.5V10.5H7.5V3ZM18 6V3C19.65 3 21 4.3425 21 6H18ZM18 7.5H21V10.5H18V7.5ZM18 12H21V15H18V12ZM18 16.5H21C21 18.15 19.6575 19.5 18 19.5V16.5ZM16.5 19.5H7.5V12H16.5V19.5ZM6 16.5V19.5C4.35 19.5 3 18.1575 3 16.5H6ZM6 15H3V12H6V15Z"
        fill="currentColor"
      />
    </svg>
  )
}
