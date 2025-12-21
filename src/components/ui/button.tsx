import clsx from 'clsx'

type ButtonProps = {
  variant?: 'default' | 'blue'
  icon?: React.ElementType
} & React.ComponentProps<'button'>

export function Button({
  variant = 'default',
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex px-6 py-4 rounded-lg gap-2 cursor-pointer font-lato font-medium text-xl transition-all',
        {
          'dark:bg-surf1-dark bg-surf1-light': variant === 'default',
          'bg-blue-700 text-light': variant === 'blue',
        }
      )}
      {...props}
    >
      {children} {Icon && <Icon />}
    </button>
  )
}
