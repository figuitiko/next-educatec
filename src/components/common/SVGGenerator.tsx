import Facebook from './../../../public/images/authors/facebook.svg'
import Twitter from './../../../public/images/authors/twitter.svg'
import Instagram from './../../../public/images/authors/instagram.svg'
import LinkedIn from './../../../public/images/authors/linkedin.svg'

export const SVGGenerator = ({
  name,
  width,
  height,
  className
}: {
  name: string
  width: string
  height: string
  className?: string
}) => {
  const svgMap = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: LinkedIn
  }

  const SVGIcon = svgMap[name as keyof typeof svgMap]
  return <SVGIcon width={width} height={height} className={className} />
}
