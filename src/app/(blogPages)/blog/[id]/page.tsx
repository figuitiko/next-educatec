type Params = Promise<{ id: string }>

const BlogPage = async ({ params }: { params: Params }) => {
  const { id } = (await params) ?? { id: 'default-id' }
  return <div>{id}</div>
}

export default BlogPage
