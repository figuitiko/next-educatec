import { galleryData } from './config'
import SectionWrapper from '@/components/share/SectionWrapper'
import { Text } from '@/components/share/text/Text'
import Link from 'next/link'

import { GallerySelector } from '@/components/pages/gallery/GallerySelector'

// const Gallery = dynamic(
//   async () => await import('@/components/share/gallery/Gallery')
// )
type Params = Promise<{ slug: string }>

const GalleryPage = async ({ params }: { params: Params }) => {
  const { slug } = (await params) ?? { slug: 'care' }
  const { data: { categories } = { categories: [] } } =
    galleryData[slug as keyof typeof galleryData] || {}

  return (
    <>
      <SectionWrapper
        id="hero"
        className="justify-center items-center bg-gallery-hero bg-no-repeat bg-cover h-[55vh] mt-[-120px]"
      />
      <SectionWrapper id="gallery">
        <div className="flex gap-2 md:gap-8 flex-col">
          <Text as="h2" className="heading-main text-secondary text-center">
            Galería
          </Text>
          <div className="flex flex-col md:flex-row gap-2">
            <Link className="text-secondary underline" href="/gallery/care">
              {' '}
              Asistencial{' '}
            </Link>
            <span className="text-secondary hidden md:inline-block">|</span>
            <Link className="text-secondary underline" href="/gallery/economic">
              {' '}
              Empoderamiento Económico
            </Link>
            <span className="text-secondary hidden md:inline-block">|</span>
            <Link
              className="text-secondary underline"
              href="/gallery/entrepreneurship"
            >
              {' '}
              Emprendimiento{' '}
            </Link>
          </div>
        </div>
        <GallerySelector categories={categories} />
      </SectionWrapper>
    </>
  )
}

export default GalleryPage
