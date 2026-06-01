import type { SVGProps } from 'react'

import styles from './MaterialSymbolsLightPauseOutlineRoundedIcon.module.scss'

type MaterialSymbolsLightPauseOutlineRoundedIconProps = Omit<
  SVGProps<SVGSVGElement>,
  'color'
> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function MaterialSymbolsLightPauseOutlineRoundedIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: MaterialSymbolsLightPauseOutlineRoundedIconProps) {
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
        d="M14.5 18C14.232 18 13.9983 17.9003 13.799 17.701C13.5997 17.5017 13.5 17.268 13.5 17V7C13.5 6.732 13.5997 6.49833 13.799 6.299C13.9983 6.09967 14.232 6 14.5 6H17C17.268 6 17.5017 6.09967 17.701 6.299C17.9003 6.49833 18 6.732 18 7V17C18 17.268 17.9003 17.5017 17.701 17.701C17.5017 17.9003 17.268 18 17 18H14.5ZM7 18C6.732 18 6.49833 17.9003 6.299 17.701C6.09967 17.5017 6 17.268 6 17V7C6 6.732 6.09967 6.49833 6.299 6.299C6.49833 6.09967 6.732 6 7 6H9.5C9.768 6 10.0017 6.09967 10.201 6.299C10.4003 6.49833 10.5 6.732 10.5 7V17C10.5 17.268 10.4003 17.5017 10.201 17.701C10.0017 17.9003 9.768 18 9.5 18H7ZM14.5 17H17V7H14.5V17ZM7 17H9.5V7H7V17Z"
        fill="currentColor"
      />
    </svg>
  )
}
