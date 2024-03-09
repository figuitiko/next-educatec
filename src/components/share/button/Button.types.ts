export type ButtonProps = {
  children: React.ReactNode
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant: 'primary' | 'secondary'
}
export type LinkProps = {
  children: React.ReactNode
  href: string
  variant: 'primary' | 'secondary'
}
export type Props = ButtonProps | LinkProps
