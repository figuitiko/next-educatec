'use server'
import { revalidatePath } from 'next/cache'
import { EmailTemplate } from '../components/share/email-template/EmailTemplate'
import { Resend } from 'resend'
import { z } from 'zod'
const schema = z.object({
  userName: z.string(),
  company: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  message: z.string()
})

const resend = new Resend(process.env.RESEND_API_KEY)

export const resendEmail = async (formData: FormData) => {
  const username = formData.get('userName') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const phoneNumber = formData.get('phoneNumber') as string
  const message = formData.get('message') as string
  const validateForm = schema.safeParse({
    userName: username,
    company,
    email,
    phoneNumber,
    message
  })
  if (!validateForm.success) {
    return { error: validateForm.error.flatten().fieldErrors }
  }
  try {
    const dataUser = await resend.emails.send({
      from: `${username} <${process.env.ADMIN_EMAIL ?? 'directora@instituto-educatec.org'}>`,
      to: [email],
      subject: `Nuevo mensaje de ${username}`,
      react: EmailTemplate({ username, email, msg: message, company })
    })
    const dataAdmin = await resend.emails.send({
      from: `${username} <${process.env.ADMIN_EMAIL ?? 'directora@instituto-educatec.org'}>`,
      to: [process.env.ADMIN_EMAIL ?? 'directora@instituto-educatec.org'],
      subject: `Nuevo mensaje de ${username}`,
      react: EmailTemplate({ username, email, msg: message, company })
    })
    revalidatePath('/contact')
    const error = dataUser.error ?? dataAdmin.error
    if (error) {
      return { error }
    }
    return { dataUser, dataAdmin }
  } catch (error) {
    return { error }
  }
}
