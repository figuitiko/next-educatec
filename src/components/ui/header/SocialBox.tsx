import Image from 'next/image'
import { SOCIAL_ITEMS } from './config'

const SocialBox = () => {
  return (
    <div className="flex gap-4  justify-center items-center">
      {SOCIAL_ITEMS.map((item) => (
        <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
          <picture>
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </picture>
        </a>
      ))}
    </div>
  )
}
export default SocialBox
