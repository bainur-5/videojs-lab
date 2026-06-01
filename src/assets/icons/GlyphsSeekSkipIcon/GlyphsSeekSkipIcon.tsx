import type { SVGProps } from 'react'

import styles from './GlyphsSeekSkipIcon.module.scss'

type GlyphsSeekSkipIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function GlyphsSeekSkipIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 0.3,
  className = '',
  ...props
}: GlyphsSeekSkipIconProps) {
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
        d="M11.36 11.52C11.4345 11.5759 11.495 11.6484 11.5367 11.7317C11.5783 11.815 11.6 11.9069 11.6 12C11.6 12.0932 11.5783 12.185 11.5367 12.2684C11.495 12.3517 11.4345 12.4241 11.36 12.48L3.3599 18.48C2.9645 18.7767 2.3999 18.4944 2.3999 18V6.00003C2.3999 5.50563 2.9645 5.22333 3.3599 5.52003L11.36 11.52ZM20.96 11.52C21.0345 11.5759 21.095 11.6484 21.1367 11.7317C21.1783 11.815 21.2 11.9069 21.2 12C21.2 12.0932 21.1783 12.185 21.1367 12.2684C21.095 12.3517 21.0345 12.4241 20.96 12.48L12.9599 18.48C12.5642 18.7767 11.9999 18.4944 11.9999 18V6.00003C11.9999 5.50563 12.5645 5.22333 12.9599 5.52003L20.96 11.52Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
