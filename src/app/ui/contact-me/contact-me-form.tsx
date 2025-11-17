'use client'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../text-area'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useForm as useFormspree, ValidationError } from '@formspree/react'

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

const contactMeFormSchema = z.object({
  name: z.string().min(1, 'Informe seu nome.'),
  email: z.string().email('Informe um email válido.'),
  phone: z.string().min(1, 'Informe seu número de telefone.'),
  description: z.string().min(1, 'Informe os detalhes do projeto.'),
})

type ContactMeFormData = z.infer<typeof contactMeFormSchema>

export function ContactMeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useReactHookForm<ContactMeFormData>({
    resolver: zodResolver(contactMeFormSchema),
  })

  const [formspreeState, sendToFormspree] = useFormspree(FORM_ID as string)

  async function onSubmit(data: ContactMeFormData) {
    await sendToFormspree(data)

    if (formspreeState.succeeded) {
      reset()
    }
  }

  if (formspreeState.succeeded) {
    return (
      <p className='text-green-500 font-semibold'>
        Mensagem enviada com sucesso!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='space-y-8'>
          {/* Nome */}
          <div className='space-y-1'>
            <Input placeholder='Nome' {...register('name')} />
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className='space-y-1'>
            <Input type='email' placeholder='Email' {...register('email')} />
            <ValidationError
              prefix='Email'
              field='email'
              errors={formspreeState.errors}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Telefone */}
          <div className='space-y-1'>
            <Input type='tel' placeholder='Telefone' {...register('phone')} />
            {errors.phone && (
              <span className='text-red-500 text-sm'>
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-col items-end space-y-8'>
          {/* Descrição */}
          <div className='w-full space-y-1'>
            <TextArea
              placeholder='Detalhes do projeto'
              {...register('description')}
            />
            <ValidationError
              prefix='Description'
              field='description'
              errors={formspreeState.errors}
            />
            {errors.description && (
              <span className='text-red-500 text-sm'>
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Botão */}
          <Button
            variant='blue'
            type='submit'
            disabled={formspreeState.submitting}
          >
            {formspreeState.submitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </div>
      </div>
    </form>
  )
}
