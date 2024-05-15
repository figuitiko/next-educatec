export type SocialAuthor = {
  id: number
  name: string
  avatar: string
  link: string
}
export type AuthorCustomProps = {
  id: number
  name: string
  avatar: string
  socials: SocialAuthor[]
}
