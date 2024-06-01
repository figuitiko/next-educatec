import { type Post } from '@/app/types'
import { Text } from '@/components/share/text/Text'
import { MAIN_BOX_HEADING } from './config'
import { dateFormatter } from '@/lib/dateFormmater'
import Button from '@/components/share/button/Button'
import Image from 'next/image'

const MainBoxAllPost = ({ data }: { data: Post }) => {
  return (
    <div className="flex p-24 bg-nine gap-8 justify-between w-full max-w-[1200px]">
      <div className="flex flex-col gap-8 flex-1  ">
        <Text
          as="h2"
          className="text-seven font-medium text-sm uppercase leading-[20px] tracking-[3px]"
        >
          {MAIN_BOX_HEADING}
        </Text>
        <Text className="text-[36px] text-secondary font-bold leading-[37px] tracking-[-2px]">
          {data.title.rendered}
        </Text>
        <div className="flex gap-4">
          <Text className="text-[18px] text-fifth leading-[28px] tracking-[-0.45px] capitalize">
            by{' '}
            <Text
              as="span"
              className="text-secondary text-[18px]  leading-[28px] tracking-[-0.45px]"
            >
              {data.author.name}
            </Text>{' '}
          </Text>
          <Text as="span" className="text-fifth">
            |
          </Text>
          <Text
            as="span"
            className="text-[18px] text-fifth leading-[28px] tracking-[-0.45px]"
          >
            {dateFormatter(String(data.date_gmt))}
          </Text>
        </div>
        <div
          className="text-[18px]  leading-[28px] tracking-[-0.45px] [&>p]:text-fifth [&>p]:text-sm [&>p]:leading-5"
          dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
        ></div>
        <Button href={`/blog/${data.id}`}>Leer más..</Button>
      </div>
      <picture className="flex-1 flex items-center">
        <Image
          src={data.fimg_url}
          alt={data.title.rendered}
          width={429}
          height={306}
        />
      </picture>
    </div>
  )
}

export default MainBoxAllPost
