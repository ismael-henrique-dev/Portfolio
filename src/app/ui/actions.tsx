'use client'

import { useTheme } from 'next-themes'
import { MoonStar, SunDim } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

export function Actions() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className='size-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex justify-center items-center'
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex justify-center items-center'
          >
            {theme && theme === 'dark' ? <SunDim /> : <MoonStar />}
          </motion.div>
        </AnimatePresence>
      </button>
      <button className='size-12 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg text-sm font-semibold'>
        PT
      </button>
    </div>
  )
}
