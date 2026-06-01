import type { SVGProps } from 'react'

import styles from './StreamlineLayers1Icon.module.scss'

type StreamlineLayers1IconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function StreamlineLayers1Icon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.71429,
  className = '',
  ...props
}: StreamlineLayers1IconProps) {
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
        d="M23.1429 12.6L12.6857 17.4172C12.4624 17.519 12.2198 17.5718 11.9743 17.5718C11.7288 17.5718 11.4862 17.519 11.2629 17.4172L0.857178 12.6M23.1429 18.1714L12.6857 22.9886C12.4624 23.0905 12.2198 23.1432 11.9743 23.1432C11.7288 23.1432 11.4862 23.0905 11.2629 22.9886L0.857178 18.1714M12.8057 11.8286C12.5515 11.939 12.2772 11.996 12 11.996C11.7228 11.996 11.4486 11.939 11.1943 11.8286L1.42289 7.30288C1.26422 7.22285 1.13088 7.10034 1.03771 6.94901C0.944547 6.79767 0.895218 6.62345 0.895218 6.44573C0.895218 6.26802 0.944547 6.0938 1.03771 5.94246C1.13088 5.79113 1.26422 5.66862 1.42289 5.58859L11.1943 1.02859C11.4486 0.91818 11.7228 0.861206 12 0.861206C12.2772 0.861206 12.5515 0.91818 12.8057 1.02859L22.5772 5.55431C22.7359 5.63434 22.8692 5.75684 22.9624 5.90818C23.0555 6.05951 23.1049 6.23374 23.1049 6.41145C23.1049 6.58916 23.0555 6.76339 22.9624 6.91472C22.8692 7.06606 22.7359 7.18856 22.5772 7.26859L12.8057 11.8286Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
