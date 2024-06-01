import { Suspense } from 'react'
import Await from '@/components/common/Await'
import MainBoxAllPost from '@/components/ui/blog/MainBoxAllPost/MainBoxAllPost'
import SectionWrapper from '@/components/share/SectionWrapper'
import { getMainFeaturedPost, getPostsFromWp } from '@/lib/fetcher'
import ListAllPost from '@/components/ui/blog/ListAllPost/ListAllPost'
import { Pagination } from '@/components/common/Pagination/Pagination'

type ISearchParams = Record<string, string | string | string[] | undefined>

const page = ({ searchParams }: { searchParams: ISearchParams }) => {
  const page =
    typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1

  const getMainFeaturedPostPromise = getMainFeaturedPost()
  const getAllPostsPromise = getPostsFromWp(page)
  return (
    <>
      <SectionWrapper
        id="all-post-main"
        className="flex-row  justify-center lg:py-4 lg:px-24 "
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Await promise={getMainFeaturedPostPromise}>
            {(data) => <MainBoxAllPost data={data} />}
          </Await>
        </Suspense>
      </SectionWrapper>
      <SectionWrapper id="all-posts" className="flex-row  justify-center ">
        <Suspense fallback={<div>Loading...</div>}>
          <Await promise={getAllPostsPromise}>
            {(data) => {
              const pages =
                data.totalPages !== undefined
                  ? Array.from(Array(data.totalPages).keys())
                  : []
              return (
                <div className="flex flex-col">
                  <ListAllPost posts={data} />
                  <Pagination currentPage={page} pages={pages} />
                </div>
              )
            }}
          </Await>
        </Suspense>
      </SectionWrapper>
    </>
  )
}

export default page
