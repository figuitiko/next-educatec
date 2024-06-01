import { type Post } from '@/app/types'
import { Text } from '@/components/share/text/Text'
import Image from 'next/image'

const BlogBox = (data: Post) => {
  console.log(data.fimg_url)
  return (
    <div className="flex gap-8 max-w-[1200px] items-center">
      <picture className="min-w-[429px]">
        <Image
          src={data.fimg_url || '/images/fallback.jpg'}
          alt=""
          width={429}
          height={306}
          className="object-cover"
        />
      </picture>
      <div className="flex flex-col gap-4">
        <Text
          as="h2"
          className="text-[36px] text-main font-bold leading-[48px] tracking-[-2px]"
        >
          {data.title.rendered}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
      </div>
    </div>
  )
}

export default BlogBox
