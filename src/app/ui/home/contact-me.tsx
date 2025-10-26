import { ContactMeForm } from '../contact-me/contact-me-form'

export function ContactMeSection() {
  return (
    <section
      id='contact-me'
      className='w-full flex flex-col items-center justify-center gap-16'
    >
      <h2 className='font-heebo font-medium text-3xl text-center'>
        Entre em contato comigo
      </h2>
      <ContactMeForm />
    </section>
  )
}
