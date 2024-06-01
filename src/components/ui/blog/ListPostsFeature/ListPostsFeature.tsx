import { type Post } from '@/app/types'
import PostFeature from './PostFeature'

const ListPostsFeature = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <PostFeature key={post.id} post={post} />
      ))}
    </div>
  )
}

export default ListPostsFeature
