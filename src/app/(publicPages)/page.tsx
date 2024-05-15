import Button from '@/components/share/button/Button'
import { Text } from '@/components/share/text/Text'
import SectionWrapper from '@/components/share/SectionWrapper'
import { FaArrowRight } from 'react-icons/fa'
import {
  ABOUT_SECTION_HEADING,
  ABOUT_SECTION_PARAGRAPH,
  HERO_SECTION_BTN,
  HERO_SECTION_HEADING,
  HERO_SECTION_SUBHEADING,
  PROJECTS
} from '../config'
import ContentBox from '@/components/share/content-box/ContentBox'
import { cn } from '@/utils/style.util'

const Home = () => {
  return (
    <>
      <SectionWrapper
        id="hero"
        className="justify-center items-center bg-hero-pattern bg-no-repeat bg-cover h-[55vh] mt-[-120px]"
      >
        <div className="flex flex-col justify-center max-w-[1200px] gap-4">
          <Text as="h1" className="heading-main text-primary">
            {HERO_SECTION_HEADING}
          </Text>
          <Text className="text-2xl font-medium">
            {HERO_SECTION_SUBHEADING}
          </Text>
          <Button variant="secondary" href="/about">
            <Text className="flex items-center gap-1 text-white uppercase">
              {' '}
              {HERO_SECTION_BTN} <FaArrowRight />
            </Text>
          </Button>
        </div>
      </SectionWrapper>
      <SectionWrapper
        id="nosotros"
        className="justify-center items-center bg-primary"
      >
        <ContentBox
          imgSrc="/images/Illustrationsabout-hero.webp"
          headingText={ABOUT_SECTION_HEADING}
          bodyText={ABOUT_SECTION_PARAGRAPH}
          bodyCss="text-2xl font-medium text-white"
          btnText={HERO_SECTION_BTN}
          link="/about"
        />
      </SectionWrapper>
      <SectionWrapper
        id="proyectos"
        className="justify-center items-center bg-white"
      >
        <Text as="h2" className="heading-main text-primary">
          Nuestros Proyectos
        </Text>
        <div
          className={cn('flex flex-col gap-36', {
            'overflow-y-scroll max-h-[1200px]': PROJECTS.length > 3
          })}
        >
          {PROJECTS.map((project) => (
            <ContentBox
              key={project.ID}
              headingText={project.HEADING}
              bodyText={project.BODY}
              bodyCss="text-primary"
              imgSrc={project.IMG_SRC}
              btnText={project.BTN_TEXT}
              isPrimaryBtn={true}
              link={project.LINK}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}

export default Home
