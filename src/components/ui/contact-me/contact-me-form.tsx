'use client'

import { useMemo } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import { useTranslations } from 'next-intl'
import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../text-area'

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

export function ContactMeForm() {
  const t = useTranslations('HomePage.contact')

  // Schema dinâmico com traduções
  const contactMeFormSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t('errors.name')),
        email: z.string().email(t('errors.email')),
        phone: z.string().min(1, t('errors.phone')),
        description: z.string().min(1, t('errors.description')),
      }),
    [t]
  )

  type ContactMeFormData = z.infer<typeof contactMeFormSchema>

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
    if (formspreeState.succeeded) reset()
  }

  if (formspreeState.succeeded) {
    return <p className='text-green-500 font-semibold'>{t('success')}</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='space-y-8'>
          {/* Nome */}
          <div className='space-y-1'>
            <Input placeholder={t('placeholders.name')} {...register('name')} />
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className='space-y-1'>
            <Input
              type='email'
              placeholder={t('placeholders.email')}
              {...register('email')}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Telefone */}
          <div className='space-y-1'>
            <Input
              type='tel'
              placeholder={t('placeholders.phone')}
              {...register('phone')}
            />
            {errors.phone && (
              <span className='text-red-500 text-sm'>
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-col items-end space-y-8'>
          <div className='w-full space-y-1'>
            <TextArea
              placeholder={t('placeholders.description')}
              {...register('description')}
            />
            {errors.description && (
              <span className='text-red-500 text-sm'>
                {errors.description.message}
              </span>
            )}
          </div>

          <Button
            variant='blue'
            type='submit'
            disabled={formspreeState.submitting}
          >
            {formspreeState.submitting ? t('sending') : t('button')}
          </Button>
        </div>
      </div>
    </form>
  )
}
