'use client'
import Link from 'next/link'
import { menuItems } from '../header/config'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/style.util'

const NavbarFooterBlog = () => {
  const pathname = usePathname()
  return (
    <nav className="flex ">
      <ul className="flex flex-col md:flex-row gap-8 items-center">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className={cn({
                'text-white': pathname !== item.url,
                'text-secondary': pathname === item.url
              })}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarFooterBlog
