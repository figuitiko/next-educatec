import Image from 'next/image'
import React from 'react'

const LogoBox = () => {
  return (
    <div className='flex justify-center items-center'>
      <picture>
        <Image src="/images/logo.png" alt="logo" width={300} height={200} />
      </picture>
    </div>
  )
}

export default LogoBox
