import type React from 'react'

export type ButtonProps = {
  children: React.ReactNode
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'secondary'
}
export type LinkProps = {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}
export type Props = ButtonProps | LinkProps
