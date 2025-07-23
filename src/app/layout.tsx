import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { heebo, lato } from './ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Ismael',
  },
  description:
    'Discover the work and skills of a passionate frontend developer. Explore projects built with React, Tailwind CSS, and Next.js, with a strong focus on clean design and user experience.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={`${lato.variable} ${heebo.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          storageKey='theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

