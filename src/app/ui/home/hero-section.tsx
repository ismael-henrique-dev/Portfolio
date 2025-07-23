'use client'

import { motion } from 'motion/react'
import { socialLinks } from '@/app/lib/utils'
import { Button } from '../button'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className='flex flex-col items-center gap-6'>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className='origin-center'
      >
        <Image
          className='w-[300px] h-[300px] lg:w-[384px] lg:h-[384px] mb-6 lg:mb-0 rounded-lg object-cover'
          width={384}
          height={384}
          src={'./images/avatar.svg'}
          alt='Foto de perfil do Ismael Henrique'
        />
      </motion.div>

      <motion.div
        className='flex items-center flex-col gap-4 text-center'
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='font-lato font-black tracking-wide lg:text-6xl text-2xl dark:'>
          Ismael Henrique
        </h2>
        <span className='font-lato font-semibold tracking-wide lg:text-2xl text-xl'>
          Desenvolvedor frontend e mobile
        </span>
        <p className='font-heebo text-base font-normal'>
          Apaixonado por tecnologia e por resolver problemas através do código.
        </p>
      </motion.div>

      <div className='flex gap-4 text-lg mb-4'>
        {socialLinks.map((link) => {
          const LinkIcon = link.icon

          return (
            <Link
              key={link.name}
              href={link.href}
              target='_blank'
              className='p-2 rounded-full border  hover:bg-dark/10 border-surf2-light dark:border-surf2-dark dark:hover:bg-white/10 transition'
            >
              <LinkIcon className='dark:text-surf1-light text-surf2-dark' />
            </Link>
          )
        })}
      </div>

      <Button>Download CV</Button>
    </section>
  )
}
