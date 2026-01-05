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
  { key: 'home', href: '#' },
  { key: 'about', href: '#about-me' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact-me' },
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
  { name: 'html', iconUrl: '/techs/html.svg', alt: 'HTML icon logo' },
  { name: 'css', iconUrl: '/techs/css.svg', alt: 'CSS icon logo' },
  {
    name: 'javascript',
    iconUrl: '/techs/javascript.svg',
    alt: 'JavaScript icon logo',
  },
  {
    name: 'typescript',
    iconUrl: '/techs/typescript.svg',
    alt: 'TypeScript icon logo',
  },
  { name: 'nextjs', iconUrl: '/techs/nextjs.svg', alt: 'Next.js icon logo' },
  { name: 'reactjs', iconUrl: '/techs/reactjs.svg', alt: 'React icon logo' },
  {
    name: 'tailwindcss',
    iconUrl: '/techs/tailwindcss.svg',
    alt: 'Tailwind CSS icon logo',
  },
  { name: 'git', iconUrl: '/techs/git.svg', alt: 'Git icon logo' },
]

export function getProjectSkills(projectTechnologies: string[] | undefined) {
  // 1. Verificação de segurança: se não for um array ou estiver vazio, retorna vazio.
  if (!projectTechnologies || !Array.isArray(projectTechnologies)) {
    return []
  }

  // 2. Normaliza as tecnologias do projeto para minúsculo para comparação precisa.
  const normalizedProjectTechs = projectTechnologies.map((t) => t.toLowerCase())

  // 3. Filtra o array de skills global.
  return skills.filter((skill) =>
    normalizedProjectTechs.includes(skill.name.toLowerCase())
  )
}
