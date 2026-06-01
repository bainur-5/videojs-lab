import type { SVGProps } from 'react'

import styles from './MynauiBookOpenIcon.module.scss'

type MynauiBookOpenIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function MynauiBookOpenIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.5,
  className = '',
  ...props
}: MynauiBookOpenIconProps) {
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
        d="M12.5 22V9.08C12.5 6.9216 12.6367 4.54027 10.4071 3.4142C9.58682 3 8.51354 3 6.36697 3H3.04491C1.46565 3 1.00056 3.55353 1.00056 5.02667V16.1733C1.00056 16.8928 0.95456 17.687 1.69819 18.0619C1.97162 18.2 2.32811 18.2 3.04235 18.2H6.66085C9.69798 18.2 10.8262 19.5123 12.4987 22C14.1726 19.5123 15.3008 18.2 18.3379 18.2H21.9577C22.6719 18.2 23.0297 18.2 23.3018 18.0619C24.0442 17.687 23.9995 16.8915 23.9995 16.1733V5.02667C23.9995 3.55227 23.5331 3 21.9551 3H18.6331C16.4865 3 15.4119 3 14.5916 3.4142C12.3607 4.54027 12.4987 6.9216 12.4987 9.08"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
