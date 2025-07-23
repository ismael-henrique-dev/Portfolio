type ButtonProps = {
  variant?: 'default' | 'blue'
  icon?: React.ElementType
} & React.ComponentProps<'button'>

export function Button({
  // variant = 'default',
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className='bg-blue-700 flex px-6 py-4 rounded-lg gap-2 cursor-pointer font-lato font-medium text-xl text-light'
      {...props}
    >
      {children} {Icon && <Icon />}
    </button>
  )
}
