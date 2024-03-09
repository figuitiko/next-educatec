type Props<T extends React.ElementType> = {
  children: React.ReactNode
  as?: T
}

export type TextProps<T extends React.ElementType> = Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>
