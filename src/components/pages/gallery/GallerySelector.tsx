'use client'

import SkeletonComponent from '@/components/common/SkeletonComponent'
import { type PhotoGallery } from '@/components/share/gallery/Gallery.types'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { type GallerySelectorProps } from './GallerySelector.types'
import { Text } from '@/components/share/text/Text'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Gallery = dynamic(
  async () => await import('@/components/share/gallery/Gallery')
)

export const GallerySelector = ({ categories }: GallerySelectorProps) => {
  const [selectedPhotos, setSelectedPhotos] = useState<PhotoGallery[] | null>(
    null
  )
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const handleCategoryClick = (id: string) => {
    setSelectedId(id)
    const category = categories.find((cat) => cat.id === id)
    if (category) {
      setSelectedPhotos(category.photos)
    } else {
      setSelectedPhotos(null)
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const { title, subHeading, mainPhoto, id } = category
          return (
            <div
              key={id}
              className={cn('flex flex-col gap-4 cursor-pointer', {
                'bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300':
                  !selectedId || selectedId !== id,
                'bg-pink-400 p-4 rounded-lg shadow-lg': selectedId === id
              })}
              onClick={() => {
                handleCategoryClick(id)
              }}
            >
              <Text as="h3" className="heading-sub text-primary text-center">
                {title}
              </Text>

              <picture className="w-full h-60  overflow-hidden rounded-md">
                <Image
                  src={mainPhoto.src}
                  width={mainPhoto.width}
                  height={mainPhoto.height}
                  alt="sample"
                  className="w-full h-full object-cover"
                />
              </picture>
              {subHeading && (
                <Text as="p" className="text-primary-light text-center text-sm">
                  {subHeading}
                </Text>
              )}
            </div>
          )
        })}
      </div>
      {selectedPhotos && (
        <div
          key={selectedId}
          className="animate-fade-in animate-duration-500 animate-fill-forwards"
        >
          <Suspense fallback={<SkeletonComponent count={5} />}>
            <Gallery photos={selectedPhotos} />
          </Suspense>
        </div>
      )}
    </div>
  )
}
