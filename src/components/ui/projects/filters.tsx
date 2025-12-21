'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../button'

const options = [
  { value: 'all', name: 'Todos' },
  { value: 'reactjs', name: 'React.js' },
  { value: 'nextjs', name: 'Next.js' },
  { value: 'typescript', name: 'TypeScript' },
  { value: 'javascript', name: 'JavaScript' },
]

export function Filters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const defaultValue = searchParams.get('tech')
  const [selected, setSelected] = useState(defaultValue || 'all')

  const handleSelectTech = (option: string) => {
    setSelected(option)
    const params = new URLSearchParams(searchParams)

    if (option && option !== 'all') {
      params.set('tech', option)
    } else if (option === 'all') {
      params.delete('tech')
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {options.map((option, index) => (
        <Button
          variant={selected === option.value ? 'blue' : 'default'}
          key={index}
          onClick={() => handleSelectTech(option.value)}
        >
          {option.name}
        </Button>
      ))}
    </div>
  )
}
