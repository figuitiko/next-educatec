import Image from 'next/image'

const SocialBox = () => {
  return (
    <div className="flex gap-4  justify-center">
      <picture>
        <Image src="/images/icon-fb.svg" alt="fb" width={50} height={50} />
      </picture>
      <picture>
        <Image src="/images/ig.svg" alt="ig" width={50} height={50} />
      </picture>
    </div>
  )
}

export default SocialBox
