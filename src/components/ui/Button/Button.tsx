import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonBaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  )
}
