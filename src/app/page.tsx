import type { Metadata } from 'next'
import { HeroSection } from './ui/home/hero-section'
import { AboutMe } from './ui/home/about-me'
import { ProjectsSection } from './ui/home/projects'

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
    <main className='flex flex-col gap-16 items-center w-full lg:px-16 lg:pb-16 p-5 '>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
    </main>
  )
}
