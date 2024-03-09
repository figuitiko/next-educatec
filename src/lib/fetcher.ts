export const getPostsFromWp = async () => {
  const res = await fetch('https://frank-freeman.com/wp-json/wp/v2/posts')
  const posts = await res.json()
  return posts
}
