'use client'
import { type Props } from './Button.types'
import { cn } from '@/utils/style.util'
import Link from 'next/link'

const Button = (props: Props) => {
  const { children, variant = 'primary' } = props
  const classValues = cn(
    'text-white font-bold py-4 px-8 rounded justify-start w-fit',
    {
      'bg-primary hover:bg-purple-500': variant === 'primary',
      'bg-secondary hover:bg-purple-500': variant === 'secondary'
    }
  )
  if ('handleClick' in props) {
    return (
      <button
        type={props.type}
        className={classValues}
        onClick={props.handleClick}
      >
        {children}
      </button>
    )
  }
  return (
    <Link href={props.href} className={classValues}>
      {children}
    </Link>
  )
}

export default Button
