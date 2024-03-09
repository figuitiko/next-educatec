import React from 'react'

export const HeadingMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='font-bold text-primary text-[52px]'>
      {children}
    </h1>
  )
}
