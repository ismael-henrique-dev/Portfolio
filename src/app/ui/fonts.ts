import { Heebo, Lato } from 'next/font/google'

export const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['latin'],
})

export const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
})
