import { galleryData } from './config'
import SectionWrapper from '@/components/share/SectionWrapper'
import { Text } from '@/components/share/text/Text'
import Link from 'next/link'
import { Suspense, lazy } from 'react'
const Gallery = lazy(async () => await import('@/components/share/gallery/Gallery'))

const GalleryPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug ?? 'care'
  const photos = galleryData[slug as keyof typeof galleryData].data
  const subHeading = galleryData[slug as keyof typeof galleryData].subTitle
  return (
    <SectionWrapper id="gallery">
      <div className='flex gap-8 flex-col'>
      <Text as="h2" className="heading-main text-secondary text-center">
        Galería
      </Text>
      <div className='flex gap-2'>
        <Link className='text-secondary underline' href="/gallery/care"> Asistencial </Link>
        <span className='text-secondary'>|</span>
        <Link className='text-secondary underline' href="/gallery/entrepreneur"> emprendimiento</Link>
        <span className='text-secondary'>|</span>
        <Link className='text-secondary underline' href="/gallery"> Volver a la galería </Link>
      </div>
      <Text as="h3" className="heading-sub text-main text-center">
        {subHeading}
      </Text>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery photos={photos} />
      </Suspense>
    </SectionWrapper>
  )
}

export default GalleryPage
