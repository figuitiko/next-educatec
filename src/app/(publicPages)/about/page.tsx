import SectionWrapper from '@/components/share/SectionWrapper'
import Image from 'next/image'

import { ABOUT_PAGE_HEADING, AUTHORS_HEADING } from './config'
import { Text } from '@/components/share/text/Text'
import AuthorList from '@/components/ui/blog/AuthorList/AuthorList'

const AboutPage = () => {
  return (
    <>
      <SectionWrapper id="about">
        <div className="flex flex-col justify-center items-center gap-4 p-12">
          <picture>
            <Image
              src="/images/logo_about.webp"
              alt="About"
              width={295}
              height={216}
            />
          </picture>
          <Text
            as="p"
            className="text-main max-w-[856px]  text-sm text-center md:text-left md:text-2xl text-seven"
          >
            {ABOUT_PAGE_HEADING}
          </Text>
        </div>
      </SectionWrapper>
      <SectionWrapper
        id="about-authors"
        className="w-full h-full lg:p-0 gap-8 lg:gap-8"
      >
        <Text as="h2" className="text-4xl text-center text-primary">
          {AUTHORS_HEADING}
        </Text>
        <div className="flex items-center justify-center flex-col gap-8 w-full bg-secondary h-full p-24">
          <AuthorList />
        </div>
      </SectionWrapper>
    </>
  )
}

export default AboutPage
