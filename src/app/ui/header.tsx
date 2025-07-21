import Link from 'next/link'
import { navLinks } from '../lib/utils'
import { Actions } from './actions'

export function Header() {
  return (
    <header className='flex items-center justify-between w-full px-6 md:px-16 py-6 bg-zinc-300 dark:bg-zinc-900'>
      <nav className='flex flex-wrap items-center gap-8 text-zinc-800 dark:text-zinc-100'>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className='font-lato text-xl font-medium'
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Actions />
    </header>
  )
}
