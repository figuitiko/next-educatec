'use client'
import { useForm } from 'react-hook-form'
import { type FormFields } from './ContactForm.types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { resendEmail } from '@/lib/actions'
import { useFormStatus } from 'react-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const schema = yup.object().shape({
  userName: yup.string().required('El nombre es requerido'),
  company: yup.string().required('La compañia es requerida'),
  email: yup
    .string()
    .email('Entre una dirección email válida')
    .required('El email es requerido'),
  phoneNumber: yup.string().required(),
  message: yup.string().required()
})

export const ContactForm = () => {
  const { pending } = useFormStatus()
  const {
    register,
    formState: { errors },
    reset
  } = useForm<FormFields>({
    defaultValues: {
      userName: '',
      company: '',
      email: '',
      phoneNumber: '',
      message: ''
    },
    resolver: yupResolver(schema),
    mode: 'onBlur'
  })

  const handleSubmitWithEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = await resendEmail(formData)
    if ((data && typeof data === 'object' && 'error' in data) || !data) {
      toast.error('Error al enviar el mensaje')
      return
    }
    toast.success('Mensaje enviado')
    reset()
  }

  return (
    <form
      onSubmit={handleSubmitWithEvent}
      className="flex flex-1 flex-col gap-12 p-2 lg:p-8"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-1 flex-col">
          <label className="text-fifth" htmlFor="Nombre">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            className="border-b-2 border-fifth p-4 outline-none"
            {...register('userName')}
          />
          <p className="text-red-500">{errors.userName?.message}</p>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-fifth" htmlFor="Nombre">
            Compañia
          </label>
          <input
            placeholder="Compañia"
            className="border-b-2 border-fifth p-4 outline-none"
            {...register('company')}
          />
          <p className="text-red-500">{errors.company?.message}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-fifth" htmlFor="Nombre">
            Email
          </label>
          <input
            placeholder="Email"
            className="border-b-2 border-fifth p-4 outline-none"
            {...register('email')}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-fifth" htmlFor="Nombre">
            Teléfono
          </label>
          <input
            placeholder="Teléfono"
            className="border-b-2 border-fifth p-4 outline-none"
            {...register('phoneNumber')}
          />
          <p className="text-red-500">{errors.phoneNumber?.message}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <label className="text-fifth" htmlFor="Nombre">
          Mensaje
        </label>
        <textarea
          placeholder="Mensaje"
          className="border-b-2 border-fifth p-4 outline-none"
          {...register('message')}
        />
        <p className="text-red-500">{errors.message?.message}</p>
      </div>
      <button
        className="self-end mt-auto bg-secondary hover:bg-purple-500 text-white font-bold py-4 px-8 rounded justify-start w-fit"
        type="submit"
        aria-disabled={pending}
      >
        Enviar Mensaje
      </button>
      <ToastContainer />
    </form>
  )
}
