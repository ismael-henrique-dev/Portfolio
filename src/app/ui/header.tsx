'use client'

import Link from 'next/link'
import { navLinks } from '../lib/utils'
import { Actions } from './actions'
import { motion } from 'motion/react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/app/ui/drawer'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <motion.header
      className='flex items-center justify-between w-full px-6 md:px-16 py-6 bg-light dark:bg-dark'
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className='hidden lg:flex flex-wrap items-center gap-8 text-zinc-800 dark:text-zinc-100'>
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

      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <button
            className='lg:hidden flex flex-col justify-between size-10'
            aria-label='Menu'
          >
            <Menu size={40} />
          </button>
        </DrawerTrigger>

        <DrawerContent className='dark:bg-surface-background-dark bg-surface-background-light'>
          <div className='flex flex-col gap-4 p-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-xl font-medium text-zinc-900 dark:text-zinc-100'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <Actions />
    </motion.header>
  )
}
