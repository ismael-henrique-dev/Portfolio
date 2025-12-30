import { Mail, Phone } from 'lucide-react'
import { navLinks, socialLinks } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations('HomePage.nav')
  return (
    <footer className='dark:bg-surf1-dark bg-surf2-light dark:text-surf2-light text-surf2-dark px-6 text-center flex flex-col items-center gap-6 w-full pt-10 pb-6'>
      {/* Links de navegação */}
      <nav className='flex flex-wrap justify-center gap-8 text-sm'>
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className='font-lato text-xl font-medium hover:underline underline-offset-3'
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>

      {/* Ícones sociais */}
      <div className='flex gap-4 text-lg'>
        {socialLinks.map((link) => {
          const LinkIcon = link.icon

          return (
            <Link
              key={link.name}
              href={link.href}
              target='_blank'
              className='p-2 rounded-full border  hover:bg-dark/10 border-txt2-light dark:border-surf2-dark dark:hover:bg-white/10 transition'
              aria-label={`Abrir ${link.name}`}
            >
              <LinkIcon />
            </Link>
          )
        })}
      </div>

      {/* Contato */}
      <address className='flex flex-col sm:flex-row gap-4 items-center justify-center text-sm not-italic'>
        <div className='flex items-center gap-2 '>
          <Mail />
          <span className='font-lato font-bold text-xl tracking-[3%]'>
            ismael.henrique.dev@gmail.com
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Phone />
          <span className='font-lato font-bold text-xl tracking-[3%]'>
            (88) 99337-7174
          </span>
        </div>
      </address>

      {/* Créditos */}
      <div className='w-10rem lg:w-30rem border-t border-t-txt2-light dark:border-t-txt2-dark pt-2'>
        <strong className='font-lato font-bold tracking-[3%]'>
          By Ismael Henrique
        </strong>
      </div>
    </footer>
  )
}
