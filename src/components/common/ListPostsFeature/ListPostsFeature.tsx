import { type Post } from '@/app/types'
import PostFeature from './PostFeature'

const ListPostsFeature = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostFeature key={post.id} post={post} />
      ))}
    </div>
  )
}

export default ListPostsFeature
