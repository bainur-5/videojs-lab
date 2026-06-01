import type { SVGProps } from 'react'

import styles from './MaterialSymbolsLightKeyboardOutlineIcon.module.scss'

type MaterialSymbolsLightKeyboardOutlineIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function MaterialSymbolsLightKeyboardOutlineIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 2,
  className = '',
  ...props
}: MaterialSymbolsLightKeyboardOutlineIconProps) {
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
        d="M3.06489 20C2.47626 20 1.98517 19.8075 1.59161 19.4225C1.19806 19.0375 1.00085 18.5567 1 17.98V7.02C1 6.44417 1.1972 5.96375 1.59161 5.57875C1.98602 5.19375 2.47668 5.00083 3.06361 5H21.9364C22.5242 5 23.0148 5.19292 23.4084 5.57875C23.8019 5.96458 23.9991 6.445 24 7.02V17.9812C24 18.5562 23.8028 19.0367 23.4084 19.4225C23.014 19.8083 22.5233 20.0008 21.9364 20H3.06489ZM3.06489 18.75H21.9364C22.1323 18.75 22.3125 18.67 22.4769 18.51C22.6413 18.35 22.7231 18.1733 22.7222 17.98V7.02C22.7222 6.8275 22.6404 6.65083 22.4769 6.49C22.3133 6.32917 22.1332 6.24917 21.9364 6.25H3.06361C2.86768 6.25 2.68752 6.33 2.52311 6.49C2.3587 6.65 2.27693 6.82667 2.27778 7.02V17.9812C2.27778 18.1729 2.35956 18.3492 2.52311 18.51C2.68667 18.6708 2.86683 18.7508 3.06361 18.75M7.68406 17.2125H17.3159V15.2875H7.68406V17.2125ZM3.85072 13.4625H5.81594V11.5375H3.85072V13.4625ZM7.68406 13.4625H9.64928V11.5375H7.68406V13.4625ZM11.5174 13.4625H13.4826V11.5375H11.5174V13.4625ZM15.3507 13.4625H17.3159V11.5375H15.3507V13.4625ZM19.1841 13.4625H21.1493V11.5375H19.1841V13.4625ZM3.85072 9.7125H5.81594V7.7875H3.85072V9.7125ZM7.68406 9.7125H9.64928V7.7875H7.68406V9.7125ZM11.5174 9.7125H13.4826V7.7875H11.5174V9.7125ZM15.3507 9.7125H17.3159V7.7875H15.3507V9.7125ZM19.1841 9.7125H21.1493V7.7875H19.1841V9.7125Z"
        fill="currentColor"
      />
    </svg>
  )
}
