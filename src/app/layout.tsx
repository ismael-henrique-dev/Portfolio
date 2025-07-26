import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { heebo, lato } from './ui/fonts'
import './globals.css'
import { Header } from './ui/header'
import { Footer } from './ui/footer'

export const metadata: Metadata = {
  title: {
    default: 'Ismael Henrique',
    template: '%s | Ismael Henrique',
  },
  description:
    'Discover the work and skills of a passionate frontend developer. Explore projects built with React, Tailwind CSS, and Next.js, with a strong focus on clean design and user experience.',
  openGraph: {
    type: 'website',
    url: 'https://ismaelhenrique-portfolio.vercel.app',
    title: 'Portfolio | Ismael Henrique',
    description: `Ismael's portfolio`,
    siteName: 'Portfolio | Ismael Henrique',

    images: [
      {
        url: 'https://ismaelhenrique-portfolio.vercel.app/images/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Social preview image',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={`${lato.variable} ${heebo.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' storageKey='theme'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
