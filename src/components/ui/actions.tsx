'use client'

import { useTheme } from 'next-themes'
import { MoonStar, SunDim } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useEffect, useState } from 'react'

export function Actions() {
  const [isSwitchingLang, setIsSwitchingLang] = useState(false)
  const { theme, setTheme } = useTheme()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsSwitchingLang(false)
  }, [locale])

  function toggleLocale() {
    if (isSwitchingLang) return

    setIsSwitchingLang(true)

    // O router.replace agora usa o pathname dinâmico
    router.replace(pathname, {
      locale: locale === 'pt-BR' ? 'en' : 'pt-BR',
    })
  }

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
      <button
        onClick={toggleLocale}
        disabled={isSwitchingLang}
        className='size-12 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg text-sm font-semibold'
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={`${locale}-${isSwitchingLang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex justify-center items-center'
          >
            {locale === 'pt-BR' ? 'EN' : 'PT'}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  )
}
