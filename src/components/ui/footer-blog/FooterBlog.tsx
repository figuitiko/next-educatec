import Image from 'next/image'
import React from 'react'
import NavbarFooterBlog from './NavbarFooterBlog'
import SocialBox from '../header/SocialBox'
import FormSub from './FormSub'

const FooterBlog = () => {
  return (
    <div className=" flex flex-col w-full bg-blend-multiply bg-primary">
      <div className="flex flex-col items-center gap-4 py-6 md:flex-row max-w-[1000px] w-full justify-between mx-auto">
        <picture>
          <Image
            className="w-auto  h-auto"
            src="/images/logo-footer.webp"
            alt="1"
            width={200}
            height={200}
          />
        </picture>
        <NavbarFooterBlog />
        <SocialBox />
      </div>
      <div className="flex flex-col md:flex-row p-16  w-full bg-primary-light bg-opacity-50  mx-auto  justify-center gap-12  items-center">
        <h3 className="text-white font-bold text-[36px] max-w-auto lg:max-w-[600px] leading-10 text-center md:text-left">
          Suscríbete a nuestro Boletín para enterarte antes que nadie de
          nuestros últimos artículos y noticias.
        </h3>
        <FormSub />
      </div>
      <div className="flex flex-col items-center md:flex-row w-full justify-center max-w-[1000px] mx-auto gap-12 py-12">
        <div className="flex gap-4">
          <picture>
            <Image
              className="w-auto  h-auto"
              src="/images/icons/bxs_phone-call.svg"
              alt="1"
              width={200}
              height={200}
            />
          </picture>
          <span className="text-white">
            <a href="tel:+573202020202">+52 320 202 0202</a>
          </span>
        </div>
        <div className="flex gap-4">
          <picture>
            <Image
              className="w-auto  h-auto"
              src="/images/icons/ic_sharp-email.svg"
              alt="1"
              width={200}
              height={200}
            />
          </picture>
          <span className="flex container">
            <a
              href="mailto:institutoeducatec@gmail.com"
              className="text-white flex truncate"
            >
              {' '}
              institutoeducatec@gmail.com
            </a>
          </span>
        </div>
        <div className="flex gap-4">
          <picture>
            <Image
              className="w-auto  h-auto"
              src="/images/icons/carbon_location-filled.svg"
              alt="1"
              width={200}
              height={200}
            />
          </picture>
          <span className="text-white">
            Tlahuexolotzi #22,
            <br /> Santiago Tepeticpac, <br /> Totolac, Tlaxcala, C.P. 90163
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterBlog
