import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../text-area'

export function ContactMeForm() {
  return (
    <form className='w-full'>
      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='space-y-8'>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
          <Input placeholder='Número de telefone' />
        </div>
        <div className='flex flex-col items-end space-y-8'>
          <TextArea placeholder='Detalhes do projeto' />
          <Button variant='blue'>Enviar mensagem</Button>
        </div>
      </div>
    </form>
  )
}
