'use client'
import Image from 'next/image'
import LogoBox from './LogoBox'
import SocialBox from './SocialBox'
import { menuItems } from './config'
import { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className="flex gap-4 rounded-[35px] bg-primary p-8 flex-col lg:flex-row mx-auto w-full">
      <div className='flex'>
        <Link href="/">
        <LogoBox />
        </Link>
      <div className='flex lg:hidden text-white ml-auto' onClick={() => { setIsVisible(!isVisible) }}>
        <picture>
          <Image src="/images/menuburger.svg" alt="menu" width={50} height={50} className='h-auto w-auto' />
        </picture>
      </div>
      </div>
      <ul className="hidden lg:flex   justify-around items-center flex-1">
       {
       menuItems.map((item) => (
        <li className='text-white' key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
       ))
        }
      </ul>
     {
      isVisible && (
        <ul className="lg:hidden flex flex-col gap-4   justify-around items-center flex-1">
       {
       menuItems.map((item) => (
        <li className='text-white' key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
       ))
        }
      </ul>
      )
     }
      <SocialBox />
    </nav>
  )
}

export default NavBar
