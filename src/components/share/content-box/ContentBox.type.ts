export type ContentBoxProps = {
  headingText: string
  bodyText: string
  bodyCss: string
  btnText: string
  imgSrc: string
  link: string
  isPrimaryBtn?: boolean
}
export type ContentBoxPropsWithDynamic = {
  headingText: string
  bodyText: string
  bodyCss: string
  btnText: string
  imgSrc: string
  link: string
  isDynamic: boolean
  isPrimaryBtn?: boolean
}

export type Props = ContentBoxProps | ContentBoxPropsWithDynamic
