import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/header/Header'
import MainWrapper from '@/components/share/MainWrapper'
import Footer from '@/components/ui/footer/Footer'
import { montserrat } from './ui/fonts'

export const metadata: Metadata = {
  title: 'Instituto Educatec',
  description: 'Instituto Educatec'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
        </body>
    </html>
  )
}
