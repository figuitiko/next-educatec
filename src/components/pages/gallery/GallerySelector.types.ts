import { type PhotoGallery } from '@/components/share/gallery/Gallery.types'

export type CategoriesType = Array<{
  id: string
  title: string
  subHeading?: string
  photos: PhotoGallery[]
  mainPhoto: {
    src: string
    width: number
    height: number
  }
}>

export type GallerySelectorProps = {
  categories: CategoriesType
}
