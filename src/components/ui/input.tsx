'use-client'

type InputProps = React.ComponentProps<'input'>

export function Input(props: InputProps) {
  return (
    <div className='shadow-md px-4 py-3.5 rounded-lg w-full dark:bg-surf1-dark bg-surf1-light focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 focus-within:ring-offset-transparent transition-all'>
      <input {...props} className='outline-none bg-transparent w-full' />
    </div>
  )
}
