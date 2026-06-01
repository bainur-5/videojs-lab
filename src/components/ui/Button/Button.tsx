import type { ReactNode } from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  type = 'button',
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  )
}
