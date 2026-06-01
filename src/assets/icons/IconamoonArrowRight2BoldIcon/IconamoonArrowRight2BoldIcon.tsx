import type { SVGProps } from 'react'

import styles from './IconamoonArrowRight2BoldIcon.module.scss'

type IconamoonArrowRight2BoldIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function IconamoonArrowRight2BoldIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2.5,
  className = '',
  ...props
}: IconamoonArrowRight2BoldIconProps) {
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
        d="M10 17L15 12L10 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
