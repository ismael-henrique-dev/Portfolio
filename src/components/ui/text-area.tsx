'use-client'

type TextAreatProps = React.ComponentProps<'textarea'>

export function TextArea(props: TextAreatProps) {
  return (
    <div className='px-4 py-3.5 rounded-lg w-full dark:bg-surf1-dark bg-surf1-light focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 focus-within:ring-offset-transparent transition-all'>
      <textarea {...props} className='outline-none bg-transparent w-full' />
    </div>
  )
}
