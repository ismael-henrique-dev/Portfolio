import { Header } from './ui/header'
import { Footer } from './ui/footer'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-black'>
      <Header />
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'></main>
      <Footer />
    </div>
  )
}
