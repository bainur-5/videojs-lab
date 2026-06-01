import type { SVGProps } from 'react'

import styles from './SiLightningLineIcon.module.scss'

type SiLightningLineIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function SiLightningLineIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.5,
  className = '',
  ...props
}: SiLightningLineIconProps) {
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
        d="M12.5719 10.6429L14.179 1L4 13.8571H10.4286L8.82143 23.5L19.0004 10.6429H12.5719Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
