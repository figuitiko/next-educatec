import SkeletonComponent from '@/components/common/SkeletonComponent'
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
    <>
    <SectionWrapper id="hero" className='justify-center items-center bg-gallery-hero bg-no-repeat bg-cover h-[55vh] mt-[-120px]' />
    <SectionWrapper id="gallery">
      <div className='flex gap-8 flex-col'>
      <Text as="h2" className="heading-main text-secondary text-center">
        Galería
      </Text>
      <div className='flex gap-2'>
        <Link className='text-secondary underline' href="/gallery/care"> Asistencial </Link>
        <span className='text-secondary'>|</span>
        <Link className='text-secondary underline' href="/gallery/economic"> Empoderamiento Económico</Link>
        <span className='text-secondary'>|</span>
        <Link className='text-secondary underline' href="/gallery"> Emprendimiento </Link>
      </div>
      <Text as="h3" className="heading-sub text-primary text-center">
        {subHeading}
      </Text>
      </div>
      <Suspense fallback={<SkeletonComponent count={5} />}>
        <Gallery photos={photos} />
      </Suspense>
    </SectionWrapper>
    </>
  )
}

export default GalleryPage
