import { type Post } from '@/app/types'
import BlogBox from '../BlogBox/BlogBox'

const ListAllPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <div key={post.id}>
          <BlogBox {...post} />
        </div>
      ))}
    </div>
  )
}

export default ListAllPost
