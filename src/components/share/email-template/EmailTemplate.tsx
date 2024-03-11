import { type EmailTemplateProps } from './EmailTemplate.types'

export const EmailTemplate = (props: EmailTemplateProps) => {
  if ('email' in props) {
    return (
      <div>
        <h1>Has recibido un mensaje de {props.username}</h1>
        <p>Nombre: {props.username}</p>
        <p>Compañia: {props.company}</p>
        <p>Email: {props.email}</p>
        <p>Mensaje: {props.msg}</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Muchas gracias por ponerse en contacto, {props.username}!</h1>
    </div>
  )
}
