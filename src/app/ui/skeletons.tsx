export function FiltersSkeleton() {
  const widths = ['w-24', 'w-30', 'w-30', 'w-32', 'w-32']

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {widths.map((width, index) => (
        <div
          key={index}
          className={`h-14 ${width} dark:bg-surf1-dark bg-surf2-light animate-pulse rounded-lg`}
        />
      ))}
    </div>
  )
}
