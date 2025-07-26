import { HeroSection } from './ui/home/hero-section'
import { AboutMe } from './ui/home/about-me'
import { ProjectsSection } from './ui/home/projects'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className='flex flex-col gap-16 items-center w-full lg:px-16 lg:py-2 p-5 bg-light dark:bg-dark'>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
    </main>
    // <div className='flex flex-col items-center justify-items-center min-h-screen bg-light dark:bg-dark'>

    // </div>
  )
}
