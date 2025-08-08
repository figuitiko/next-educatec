'use client'
import Image from 'next/image'
import LogoBox from './LogoBox'
import SocialBox from './SocialBox'
import { menuItems } from './config'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/style.util'

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  return (
    <nav className="flex gap-4 rounded-[35px] bg-primary p-2 md:p-4 flex-col lg:flex-row mx-auto w-full">
      <div className="flex">
        <Link href="/">
          <LogoBox />
        </Link>
        <div
          className="flex lg:hidden text-white ml-auto"
          onClick={() => {
            setIsVisible(!isVisible)
          }}
        >
          <picture>
            <Image
              src="/images/icons/menuburger.svg"
              alt="menu"
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </picture>
        </div>
      </div>
      <ul className="hidden lg:flex   justify-around items-center flex-1">
        {menuItems.map((item) => (
          <li
            className={cn({
              'text-white': pathname !== item.url,
              'text-secondary': pathname === item.url
            })}
            key={item.id}
          >
            <Link
              className={cn(
                {
                  'hover:border-b-white': pathname !== item.url,
                  'hover:border-b-secondary': pathname === item.url
                },
                'hover:border-b-2 hover:p-1'
              )}
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {isVisible && (
        <ul className="lg:hidden flex flex-col gap-4 justify-around items-center flex-1">
          {menuItems.map((item) => (
            <li
              className={cn({
                'text-white': pathname !== item.url,
                'text-secondary underline': pathname === item.url
              })}
              key={item.id}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <SocialBox />
    </nav>
  )
}

export default NavBar
