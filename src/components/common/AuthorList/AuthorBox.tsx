import { Text } from '@/components/share/text/Text'
import Image from 'next/image'
import { type AuthorCustomProps } from './AuthorList.types'

import { SVGGenerator } from '../SVGGenerator'

const AuthorBox = ({ name, avatar, socials }: AuthorCustomProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-8 items-center  even:bg-secondary group">
      <picture>
        <Image src={avatar} alt="Author" width={100} height={100} />
      </picture>
      <div className="flex flex-col items-center">
        <Text
          as="h3"
          className="text-[30px] font-bold leading-[30px] group-even:text-white text-secondary "
        >
          {name}
        </Text>
        <Text
          as="small"
          className="text-[16px] leading-[28px] text-fourth group-even:text-white"
        >
          Author Bio
        </Text>
        <div className="flex gap-4">
          {socials.map((social, idx) => (
            <a key={idx} href={social.link} target="_blank" rel="noreferrer">
              <SVGGenerator
                name={social.name}
                width="20"
                height="20"
                className="group-even:fill-white fill-secondary  group-even:text-white text-secondary"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AuthorBox
