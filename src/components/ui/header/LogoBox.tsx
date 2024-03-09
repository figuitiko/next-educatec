import Image from 'next/image'
import React from 'react'

const LogoBox = () => {
  return (
    <div className='flex justify-center items-center'>
      <picture>
        <Image src="/images/logo-header.png" alt="logo" width={300} height={200} className='h-auto w-auto' />
      </picture>
    </div>
  )
}

export default LogoBox
