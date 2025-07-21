import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Sobre mim',
    href: '/about',
  },
  { name: 'Projetos', href: '/projects' },
  { name: 'Entre em contato comigo', href: '/contact-me' },
]

export const socialLinks = [
  { name: 'Instagram', href: '/', icon: Instagram },
  {
    name: 'Linkedin',
    href: '/about',
    icon: Linkedin,
  },
  { name: 'Github', href: '/projects', icon: Github },
  { name: 'Gmail', href: '/contact-me', icon: Mail },
]
