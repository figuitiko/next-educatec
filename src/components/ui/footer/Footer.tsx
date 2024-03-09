import Image from 'next/image'
import { Text } from '../../share/text/Text'
import { FOOTER_ADDRESS_TEXT, FOOTER_CONTACT_EMAIL_TEXT, FOOTER_CONTACT_HEADING, FOOTER_INTEREST_SITES_HEADING, FOOTER_SOCIAL_HEADING } from './config'
import { roboto } from '@/app/ui/fonts'
import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary p-12 gap-8 items-center">
      <div className="flex justify-center items-center">
        <picture>
          <Image src="/images/logo-footer.webp" alt="logo-footer" width={300} height={300} className='h-auto w-auto' />
        </picture>
      </div>
      <div className='flex flex-col lg:flex-row gap-4  max-w-[1200px] w-full  justify-around'>
        <div className='flex flex-col gap-4'>
          <Text as='h2' className='heading-secondary text-secondary'>{FOOTER_SOCIAL_HEADING}</Text>
          <ul className='flex flex-col gap-2'>
            <li>
              <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaFacebook /></Text>
                <Text as='span' className='text-white text-sm'>Facebook</Text>
              </Text>
            </li>
            <li>
            <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaInstagram /></Text>
                <Text as='span' className='text-white text-sm'>Instagram</Text>
              </Text>
            </li>
            <li>
            <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaLinkedinIn /></Text>
                <Text as='span' className='text-white text-sm'>Linkedin</Text>
            </Text>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <Text as='h2' className='heading-secondary text-secondary'>{FOOTER_INTEREST_SITES_HEADING}</Text>
          <ul className='flex flex-col gap-2'>
            <li>
              <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaFacebook /></Text>
                <Text as='span' className='text-white text-sm'>Facebook</Text>
              </Text>
            </li>
            <li>
            <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaInstagram /></Text>
                <Text as='span' className='text-white text-sm'>Instagram</Text>
              </Text>
            </li>
            <li>
            <Text as='a' href="heading-secondary" className={`${roboto.className} text-white flex items-center gap-2`}>
                <Text as='span' className='text-white'><FaLinkedinIn /></Text>
                <Text as='span' className='text-white text-sm'>Linkedin</Text>
            </Text>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <Text as='h2' className='heading-secondary text-secondary'>{FOOTER_CONTACT_HEADING}</Text>
          <Text as='p' className='text-white text-sm'>{FOOTER_CONTACT_EMAIL_TEXT}</Text>
        </div>
        <div className='flex flex-col gap-4 max-w-[16rem]'>
          <Text as='p' className='text-lg text-white'>{FOOTER_ADDRESS_TEXT}</Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer
