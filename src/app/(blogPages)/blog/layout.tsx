import '../../globals.css'
import Header from '@/components/ui/header/Header'
import MainWrapper from '@/components/share/MainWrapper'
import { montserrat } from '@/app/ui/fonts'
import FooterBlog from '@/components/ui/footer-blog/FooterBlog'

const BlogLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <FooterBlog />
      </body>
    </html>
  )
}

export default BlogLayout
