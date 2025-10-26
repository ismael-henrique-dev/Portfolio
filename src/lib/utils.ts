import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navLinks = [
  { name: 'Home', href: '#' },
  {
    name: 'Sobre mim',
    href: '#about-me',
  },
  { name: 'Projetos', href: '#projects' },
  { name: 'Entre em contato comigo', href: '#contact-me' },
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

export const timeline = [
  {
    year: '2023',
    text: 'Comecei o curso técnico integrado em Informática no IFCE, onde aprendi fundamentos de lógica de programação, HTML, CSS e JavaScript. Foi meu primeiro contato prático com desenvolvimento web.',
  },
  {
    year: '2024',
    text: 'Aprofundei meus estudos em React.js e TypeScript, criando projetos pessoais para consolidar o aprendizado. Também comecei a entender melhor a integração com backend.',
  },
  {
    year: '2025',
    text: 'Realizei meu primeiro freela, desenvolvendo telas de login e cadastro com autenticação via Supabase, usando Next.js. Segui estudando clean code, arquitetura de projetos e boas práticas.',
  },
  {
    year: 'Atualmente',
    text: 'Sigo evoluindo com projetos próprios e fortalecendo minha base técnica, enquanto busco minha primeira oportunidade profissional como desenvolvedor.',
  },
]
