import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { heebo, lato } from '@/components/ui/fonts'
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'

import './globals.css'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: {
    default: 'Ismael Henrique',
    template: '%s | Ismael Henrique',
  },
  description:
    'Discover the work and skills of a passionate frontend developer. Explore projects built with React, Tailwind CSS, and Next.js, with a strong focus on clean design and user experience.',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body
        className={`${lato.variable} ${heebo.variable} antialiased bg-light dark:bg-dark`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            storageKey='theme'
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
