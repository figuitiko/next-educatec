import React from 'react'
import { type AuthorSmallInfoProps } from './AuthorSmallInfo.types'
import { dateFormatter } from '@/lib/dateFormmater'
import { cn } from '@/utils/style.util'
import { Text } from '@/components/share/text/Text'

const AuthorSmallInfo = ({
  authorName,
  postDate,
  variant = 'light'
}: AuthorSmallInfoProps) => {
  return (
    <Text
      as="small"
      className={cn(
        'text-[16px] leading-[28px]',
        variant === 'darken' && 'text-secondary'
      )}
    >
      <Text
        className={cn(
          'text-white text-[16px] leading-[28px]',
          variant === 'dark' && 'text-fourth',
          variant === 'darken' && 'text-third'
        )}
      >
        Por
      </Text>{' '}
      {authorName}{' '}
      <Text
        className={cn(
          'text-white text-[16px] leading-[28px]',
          variant === 'dark' && 'text-fourth ',
          variant === 'darken' && 'text-third'
        )}
      >
        {' '}
        | {dateFormatter(String(postDate))}
      </Text>
    </Text>
  )
}

export default AuthorSmallInfo
