'use client'

import { useTheme } from 'next-themes'
import { MoonStar, SunDim } from 'lucide-react'

export function Actions() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='size-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex justify-center items-center'
      >
        {theme === 'dark' ? <SunDim /> : <MoonStar />}
      </button>
      <button className='size-12 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg text-sm font-semibold'>
        PT
      </button>
    </div>
  )
}
