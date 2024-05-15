export type Post = {
  id: number
  date: Date
  date_gmt: Date
  guid: GUID
  modified: Date
  modified_gmt: Date
  slug: string
  status: string
  type: string
  link: string
  title: GUID
  content: Content
  excerpt: Content
  author: Author
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: any[]
  fimg_url: string
  _links: Links
}

export type Links = {
  self: About[]
  collection: About[]
  about: About[]
  author: Author[]
  replies: Author[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  'wp:featuredmedia': Author[]
  'wp:attachment': About[]
  'wp:term': WpTerm[]
  curies: Cury[]
}

export type About = {
  href: string
}

export type Cury = {
  name: string
  href: string
  templated: boolean
}

export type PredecessorVersion = {
  id: number
  href: string
}

export type VersionHistory = {
  count: number
  href: string
}

export type WpTerm = {
  taxonomy: string
  embeddable: boolean
  href: string
}

export type Content = {
  rendered: string
  protected: boolean
}

export type GUID = {
  rendered: string
}

export type Author = {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: Record<string, string>
  meta: any[]
  _links: Links
}

export type Collection = {
  href: string
}
