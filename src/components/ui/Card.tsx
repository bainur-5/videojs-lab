import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: 'article' | 'aside' | 'div' | 'section'
}

export function Card({ as: Component = 'article', children, className = '', ...props }: CardProps) {
  return (
    <Component className={[styles.card, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Component>
  )
}
