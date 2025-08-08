'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonComponent = ({ count }: { count: number }) => {
  return <Skeleton count={count} />
}

export default SkeletonComponent
