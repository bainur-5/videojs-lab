import type { SVGProps } from 'react'

import styles from './MdiAcademicCapOutlineIcon.module.scss'

type MdiAcademicCapOutlineIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function MdiAcademicCapOutlineIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: MdiAcademicCapOutlineIconProps) {
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
        d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
        fill="currentColor"
      />
    </svg>
  )
}
