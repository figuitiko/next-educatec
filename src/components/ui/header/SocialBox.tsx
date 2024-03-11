import Image from 'next/image'

const SocialBox = () => {
  return (
    <div className="flex gap-4  justify-center">
      <picture>
        <Image src="/images/icons/icon-fb.svg" alt="fb" width={50} height={50} className='h-auto w-auto' />
      </picture>
      <picture>
        <Image src="/images/icons/ig.svg" alt="ig" width={50} height={50} className='h-auto w-auto' />
      </picture>
    </div>
  )
}

export default SocialBox
