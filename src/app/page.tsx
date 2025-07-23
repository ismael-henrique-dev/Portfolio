import { Header } from './ui/header'
import { Footer } from './ui/footer'
import { HeroSection } from './ui/home/hero-section'
import { AboutMe } from './ui/home/about-me'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen gap-16 bg-surface-background-light dark:bg-surface-background-dark'>
      <Header />
      <main className='flex flex-col gap-16 items-center w-full lg:p-16 p-5'>
        <HeroSection />
        <AboutMe />
      </main>
      <Footer />
    </div>
  )
}
