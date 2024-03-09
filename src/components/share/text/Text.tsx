import { cn } from '@/utils/style.util'
import { type TextProps } from './Text.types'

export const Text = <T extends React.ElementType = 'span'>({
  as,
  children,
  className,
  ...others
}: TextProps<T>) => {
  const Component = as ?? 'span'

  return (
    <Component className ={cn('text-2xl font-medium text-third', className)} {...others}>
      {children}
    </Component>
  )
}
