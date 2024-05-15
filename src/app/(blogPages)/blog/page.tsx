import Await from '@/components/common/Await'
import { getMainFeaturedPost, getPostsFromWp } from '@/lib/fetcher'
import { Suspense } from 'react'
import Button from '@/components/share/button/Button'
import SectionWrapper from '@/components/share/SectionWrapper'
import Image from 'next/image'
import { FEATURED_POST_HEADING_SECTION } from './config'
import AuthorSmallInfo from '@/components/common/AuthorSmallInfo/AuthorSmallInfo'
import { Text } from '@/components/share/text/Text'
import ListPostsFeature from '@/components/common/ListPostsFeature/ListPostsFeature'
import Link from 'next/link'
import AuthorList from '@/components/common/AuthorList/AuthorList'

const BlogPage = () => {
  const getMainFeaturedPostPromise = getMainFeaturedPost()
  const getAllPostsPromise = getPostsFromWp()
  return (
    <>
      <SectionWrapper id="feature-post" className="relative lg:p-0 -z-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Await promise={getMainFeaturedPostPromise}>
            {(data) => (
              <div className="flex flex-col items-center w-full relative py-24 h-screen -mt-28">
                <div className="flex flex-col justify-center py-0 px-0  md:py-[50vh] md:px-48 gap-8 h-full w-auto lg:w-[1200px] max-w-[1200px]">
                  <Text
                    as="h1"
                    className="text-primary text-[56px] font-bold leading-[64px] tracking-[-2px]"
                  >
                    {data.title.rendered}
                  </Text>
                  <AuthorSmallInfo
                    authorName={data.author.name}
                    postDate={data.date}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content.rendered
                    }}
                  />
                  <div className="mt-[100px]">
                    <Button variant="secondary" href={`/blog/${data.id}`}>
                      Leer más
                    </Button>
                  </div>
                </div>
                <picture className="w-full h-full  -z-20">
                  <Image
                    src={data.fimg_url}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </picture>
              </div>
            )}
          </Await>
        </Suspense>
      </SectionWrapper>
      <SectionWrapper
        id="all-posts"
        className="flex-row  justify-center bg-secondary lg:gap-0"
      >
        <div className="flex flex-col md:flex-row max-w-[1200px]">
          <div className="flex flex-col md:flex-row">
            <Suspense fallback={<div>Loading...</div>}>
              <Await promise={getMainFeaturedPostPromise}>
                {(data) => (
                  <div className="flex flex-col  p-2 md:p-24 gap-8  justify-center">
                    <Text
                      as="h2"
                      className="text-white font-bold text-[36px] leading-[42px]"
                    >
                      {FEATURED_POST_HEADING_SECTION}
                    </Text>
                    <div className="flex-1 flex gap-4 flex-col">
                      <picture>
                        <Image
                          src={data.fimg_url}
                          alt={data.title.rendered}
                          width={500}
                          height={300}
                        />
                      </picture>
                      <AuthorSmallInfo
                        authorName={data.author.name}
                        postDate={data.date}
                        variant="dark"
                      />
                      <Text
                        as="h3"
                        className="text-white font-bold text-[30px] tracking-[-1px] leading-[30px]"
                      >
                        {data.title.rendered}
                      </Text>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.excerpt.rendered
                        }}
                      />
                    </div>
                    <div className="mt-8">
                      <Button href={`/blog/${data.id}`}>Leer más</Button>
                    </div>
                  </div>
                )}
              </Await>
            </Suspense>
          </div>
          <div className="flex-1 py-24">
            <div className="flex flex-col md:flex-row gap-4 items-center ">
              <Text
                as="h2"
                className="text-white font-bold text-[24px]  md:text-[36px] leading-[42px] truncate"
              >
                Todos los posts
              </Text>
              <Link href="/blog/all">
                <Text className="text-white text-[16px] md:text-[24px]">
                  Ver todos
                </Text>
              </Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Await promise={getAllPostsPromise}>
                {(data) => (
                  <div className="flex flex-col gap-8 items-center justify-center py-24  px-0">
                    <ListPostsFeature posts={data} />
                  </div>
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="authors" className="bg-fourth">
        <div className="flex w-full justify-center">
          <AuthorList />
        </div>
        <div></div>
      </SectionWrapper>
    </>
  )
}

export default BlogPage
