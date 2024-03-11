export type EmailTemplateClientProps = {
  username: string
}
export type EmailTemplateAdminProps = {
  username: string
  email: string
  msg: string
  company: string
}

export type EmailTemplateProps = EmailTemplateClientProps | EmailTemplateAdminProps
