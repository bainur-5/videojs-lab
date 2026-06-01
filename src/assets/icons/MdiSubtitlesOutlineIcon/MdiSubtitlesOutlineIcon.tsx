import type { SVGProps } from 'react'

import styles from './MdiSubtitlesOutlineIcon.module.scss'

type MdiSubtitlesOutlineIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function MdiSubtitlesOutlineIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: MdiSubtitlesOutlineIconProps) {
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
        d="M21.7 3C22.31 3 22.895 3.23705 23.3263 3.65901C23.7577 4.08097 24 4.65326 24 5.25V18.75C24 19.3467 23.7577 19.919 23.3263 20.341C22.895 20.7629 22.31 21 21.7 21H3.3C2.69 21 2.10499 20.7629 1.67365 20.341C1.24232 19.919 1 19.3467 1 18.75V5.25C1 4.65326 1.24232 4.08097 1.67365 3.65901C2.10499 3.23705 2.69 3 3.3 3H21.7ZM21.7 18.75V5.25H3.3V18.75H21.7ZM5.6 9.75H7.9V12H5.6V9.75ZM5.6 14.25H14.8V16.5H5.6V14.25ZM17.1 14.25H19.4V16.5H17.1V14.25ZM10.2 9.75H19.4V12H10.2V9.75Z"
        fill="currentColor"
      />
    </svg>
  )
}
