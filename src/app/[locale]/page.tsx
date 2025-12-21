import type { Metadata } from 'next'

import { AboutMeSection } from '@/components/ui/home/about-me'
import { ContactMeSection } from '@/components/ui/home/contact-me'
import { HeroSection } from '@/components/ui/home/hero-section'
import { ProjectsSection } from '@/components/ui/home/projects'

export const metadata: Metadata = {
  title: 'Home | Ismael Henrique',
  openGraph: {
    type: 'website',
    url: 'https://ismaelhenrique-portfolio.vercel.app',
    title: 'Portfolio | Ismael Henrique',
    description:
      'Sou Dev Front-End. Veja meus projetos e conheça minha jornada com React, Next.js e TypeScript.',
    siteName: `'Ismael's portfolio`,

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

export default function Home() {
  return (
    <main className='grid gap-16 items-center w-full lg:px-16 lg:pb-16 p-5 '>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
  )
}
