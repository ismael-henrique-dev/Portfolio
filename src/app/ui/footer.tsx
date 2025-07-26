import { Mail, Phone } from 'lucide-react'
import { navLinks, socialLinks } from '@/lib/utils'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='bg-[#181325] text-white px-6 py-10 text-center flex flex-col items-center gap-6 w-full'>
      {/* Links de navegação */}
      <nav className='flex flex-wrap justify-center gap-8 text-sm'>
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

      {/* Ícones sociais */}
      <div className='flex gap-4 text-lg'>
        {socialLinks.map((link) => {
          const LinkIcon = link.icon

          return (
            <Link
              key={link.name}
              href={link.href}
              target='_blank'
              className='p-2 rounded-full border border-white/40 hover:bg-white/10 transition'
            >
              <LinkIcon />
            </Link>
          )
        })}
      </div>

      {/* Contato */}
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center text-sm'>
        <div className='flex items-center gap-2'>
          <Mail className='text-white' />
          <span>ismael.henrique.dev@gmail.com</span>
        </div>
        <div className='flex items-center gap-2'>
          <Phone className='text-white' />
          <span>(88) 99337-7174</span>
        </div>
      </div>

      {/* Linha divisória */}
      <div className='w-[160px] h-px bg-white/30 mt-4' />

      {/* Créditos */}
      <strong className='text-xs text-white/60'>By Ismael Henrique</strong>
    </footer>
  )
}
