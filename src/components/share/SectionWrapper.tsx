import { cn } from '@/utils/style.util'

const SectionWrapper = ({ children, className, id }: { children: React.ReactNode, className?: string, id: string }) => {
  return (
  <section id={id} className={cn('w-full flex p-4 lg:p-24 flex-col gap-24', className)}>
    {children}
  </section>
  )
}

export default SectionWrapper
