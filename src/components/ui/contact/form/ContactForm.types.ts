export type FormFields = {
  userName: string
  company: string
  email: string
  phoneNumber: string
  message: string
}
export type InputProps = {
  label: string
  placeholder: string
  isTextArea?: boolean
}
export type ContactFormProps = {
  onSubmit: (data: FormFields) => void
}
