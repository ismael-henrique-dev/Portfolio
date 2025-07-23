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
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ismael.henriqu3',
    icon: Instagram,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/ismael-henrique-dev',
    icon: Linkedin,
  },
  {
    name: 'Github',
    href: 'https://github.com/ismael-henrique-dev',
    icon: Github,
  },
  { name: 'Gmail', href: 'mailto:ismael.henrique.dev@gmail.com', icon: Mail },
]
