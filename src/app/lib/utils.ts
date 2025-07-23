import {
  BriefcaseBusiness,
  Code,
  Github,
  GraduationCap,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
} from 'lucide-react'

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

export const aboutMeItems = [
  { description: 'Desenvolvedor frontend desde 2023.', icon: Code },
  { description: 'Cursando informática.', icon: GraduationCap },
  {
    description: 'Interesse em desenvolvimento frontend e mobile.',
    icon: Lightbulb,
  },
  {
    description: 'Em busca de uma nova oportunidade como desenvolvedor.',
    icon: BriefcaseBusiness,
  },
]

export const skills = [
  { iconUrl: '/techs/html.svg', alt: 'HTML icon logo' },
  { iconUrl: '/techs/css.svg', alt: 'CSS icon logo' },
  { iconUrl: '/techs/javascript.svg', alt: 'JavaScript icon logo' },
  { iconUrl: '/techs/typescript.svg', alt: 'TypeScript icon logo' },
  { iconUrl: '/techs/nextjs.svg', alt: 'Next.js icon logo' },
  { iconUrl: '/techs/reactjs.svg', alt: 'React icon logo' },
  { iconUrl: '/techs/tailwindcss.svg', alt: 'Tailwind CSS icon logo' },
  { iconUrl: '/techs/git.svg', alt: 'Gui icon logo' },
]
