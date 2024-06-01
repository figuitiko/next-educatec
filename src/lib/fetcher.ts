import { type Post } from '@/app/types'

export const getPostsFromWp = async (page = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?page=${page}`,
    {
      next: { revalidate: 10 }
    }
  )
  const posts = await res.json()
  console.log('posts', res.headers.get('X-WP-TotalPages'))
  // console.log('posts', posts)
  // filter all the post that are not in the main feature post cat 3
  const postsFiltered =
    posts?.filter((post: Post) => !post.categories.includes(3)) ?? []
  // posts?.filter((post: Post) => !post.categories.includes(3)) ?? []
  const authors = await Promise.all(
    postsFiltered.map(
      async (post: Post) => await getUserById(Number(post.author))
    )
  )
  const postsWithAuthor = postsFiltered.map((post: Post, index: number) => {
    return {
      ...post,
      author: authors[index],
      totalPages: res.headers.get('X-WP-TotalPages')
    }
  })

  return postsWithAuthor
}

export const getMainFeaturedPost = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts/?categories=3`,
    { next: { revalidate: 10 } }
  )
  const posts = await res.json()
  const mainFeaturePost = posts.length > 0 ? posts[0] : []
  const author = await getUserById(Number(mainFeaturePost.author))
  return {
    ...mainFeaturePost,
    author
  }
}

export const getUserById = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/users/${id}`
  )
  const user = await res.json()
  return user
}
