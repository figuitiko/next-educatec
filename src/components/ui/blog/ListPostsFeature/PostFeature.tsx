import React from 'react'
import { type PostFeatureProps } from './PostFeature.types'
import AuthorSmallInfo from '../AuthorSmallInfo/AuthorSmallInfo'

import { Text } from '@/components/share/text/Text'
import Link from 'next/link'

const PostFeature = ({ post }: PostFeatureProps) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col bg-white hover:bg-fourth px-12 py-8">
        <AuthorSmallInfo
          authorName={post.author.name}
          postDate={String(post.date)}
          variant="darken"
        />
        <Text as="h3" className="text-[30px] font-bold leading-[30px]">
          {post.title.rendered}
        </Text>
      </div>
    </Link>
  )
}

export default PostFeature
