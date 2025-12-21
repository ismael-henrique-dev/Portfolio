'use client'

import Link from 'next/link'
import { navLinks } from '@/lib/utils'
import { Actions } from './actions'
import { motion } from 'motion/react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'

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
            className='font-lato text-xl font-medium hover:underline underline-offset-3'
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <button
            className='lg:hidden size-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex justify-center items-center'
            aria-label='Menu'
          >
            <Menu />
          </button>
        </DrawerTrigger>

        <DialogTitle></DialogTitle>

        <DrawerContent className='dark:bg-surf1-dark bg-surf1-light'>
          <div className='flex flex-col gap-4 p-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-xl font-lato font-medium text-zinc-900 dark:text-zinc-100'
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
