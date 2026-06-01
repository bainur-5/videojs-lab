import type { SVGProps } from 'react'

import styles from './QuillPhoneIcon.module.scss'

type QuillPhoneIconProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  size?: number | string
  color?: string
  title?: string
  strokeWidth?: number | string
}

export function QuillPhoneIcon({
  size = 24,
  color = 'currentColor',
  title,
  strokeWidth = 1.5,
  className = '',
  ...props
}: QuillPhoneIconProps) {
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
        d="M11.1923 20.0385H12.9231M7.73077 1H16.3846C16.8436 1 17.2839 1.18235 17.6085 1.50693C17.933 1.83151 18.1154 2.27174 18.1154 2.73077V21.7692C18.1154 22.2283 17.933 22.6685 17.6085 22.9931C17.2839 23.3177 16.8436 23.5 16.3846 23.5H7.73077C7.27174 23.5 6.83151 23.3177 6.50693 22.9931C6.18235 22.6685 6 22.2283 6 21.7692V2.73077C6 2.27174 6.18235 1.83151 6.50693 1.50693C6.83151 1.18235 7.27174 1 7.73077 1Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
