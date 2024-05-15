import SectionWrapper from '@/components/share/SectionWrapper'
import { Text } from '@/components/share/text/Text'
import React from 'react'
import { CONTACT_INFO, HEADING_CONTACT, SUBHEADING_CONTACT } from './config'
import Image from 'next/image'

import FbIcon from '@/components/ui/contact/FbIcon'
import IgIcon from '@/components/ui/contact/IgIcon'
import { ContactForm } from '@/components/ui/contact/form/ContactForm'
import { EDUCATEC_FACEBOOK, EDUCATEC_INSTAGRAM } from '@/constants'

const ContactPage = () => {
  return (
    <SectionWrapper id="contact-form" className="lg:p-[135px]">
      <Text as="h2" className="text-primary text-center  text-[48px] lg:text-[64px] font-bold ">
        Contáctanos
      </Text>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 p-2 lg:p-8 bg-white">
        <div className="flex flex-col bg-primary px-8 py-12 gap-12 rounded-tl-xl rounded-bl-xl  lg:max-w-[490px]">
          <Text
            as="h3"
            className="text-white text-[26px] font-semibold leading-[31px]"
          >
            {HEADING_CONTACT}
          </Text>
            <Text as="p" className="text-fourth  text-lg font-medium">
            {SUBHEADING_CONTACT}
          </Text>
          <div className="flex flex-col gap-12">
            {CONTACT_INFO.map((info) => (
              <div key={info.ID} className="flex  gap-8 items-center">
                <picture className='min-w-[24px] min-h-[24px]'>
                  <Image
                    src={info.ICON}
                    alt={info.INFO}
                    width={24}
                    height={24}
                    className='w-auto h-auto min-w-[24px] min-h-[24px]'
                  />
                </picture>
                {info.LINK !== undefined
                  ? (
                  <a href={info.LINK}>
                    <Text
                      as="p"
                      className="text-fourth  text-lg font-medium underline"
                    >
                      {info.INFO}
                    </Text>
                  </a>
                    )
                  : (
                  <Text as="p" className="text-fourth  text-lg font-medium">
                    {info.INFO}
                  </Text>
                    )}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-12">
            <a href={EDUCATEC_FACEBOOK} target="_blank" rel="noreferrer">
              <FbIcon />
            </a>
            <a href={EDUCATEC_INSTAGRAM} target="_blank" rel="noreferrer">
              <IgIcon />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  )
}

export default ContactPage
