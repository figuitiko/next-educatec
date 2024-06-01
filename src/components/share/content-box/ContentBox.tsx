import Image from 'next/image'
import { Text } from '@/components/share/text/Text'
import Button from '@/components/share/button/Button'
import { FaArrowRight } from 'react-icons/fa'
import { type Props } from './ContentBox.type'
import { cn } from '@/utils/style.util'

const ContentBox = (props: Props) => {
  const {
    imgSrc,
    headingText,
    bodyCss,
    btnText,
    bodyText,
    link,
    isPrimaryBtn = false
  } = props
  const isDynamic = 'isDynamic' in props ? props?.isDynamic : false
  return (
    <div className="flex flex-col lg:flex-row justify-center max-w-[1200px] gap-8 ">
      <picture className="min-w-[200px] lg:min-w-[400px]">
        <Image
          src={imgSrc}
          alt="hero image"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </picture>
      <div className="flex flex-col gap-8 max-w-[600px] ">
        <Text as="h2" className="heading-main text-secondary">
          {headingText}
        </Text>
        {isDynamic ? (
          <div
            className={cn('text-2xl font-medium text-white', bodyCss)}
            dangerouslySetInnerHTML={{ __html: bodyText }}
          />
        ) : (
          <Text className={cn('text-2xl font-medium text-white', bodyCss)}>
            {bodyText}
          </Text>
        )}
        <Button variant={isPrimaryBtn ? 'primary' : 'secondary'} href={link}>
          <Text className="flex items-center gap-1 text-white uppercase text-sm md:text-xl">
            {' '}
            {btnText} <FaArrowRight />
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default ContentBox
