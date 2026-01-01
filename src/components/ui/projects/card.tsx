import { getProjectSkills } from '@/lib/utils'
import { ExternalLink, Github } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale() as 'pt-BR' | 'en'
  const projectSkills = getProjectSkills(project.technology)

  return (
    <article className='group relative dark:bg-surf1-dark bg-surf1-light w-full p-6 space-y-6 rounded-2xl shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 border border-transparent hover:border-blue-700'>
      {/* 1. LINK FANTASMA: Cobre o card todo, mas está no fundo (z-0) */}
      <Link
        href={`/project/${project.id}`}
        className='absolute inset-0 z-0 rounded-2xl'
        aria-label={`Ver detalhes de ${project.title[locale]}`}
      />

      {/* Imagem */}
      <div className='relative bg-zinc-500 h-60 rounded-t-lg overflow-hidden z-10 pointer-events-none'>
        <Image
          src={project.pictures[0]}
          alt={project.title[locale]}
          fill // Melhor usar fill com container relativo
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
      </div>

      <header className='space-y-4 relative z-10 pointer-events-none'>
        <div className='flex justify-between items-center'>
          <time className='dark:text-txt2-dark text-txt2-light text-sm font-heebo'>
            {project.createdAt}
          </time>
          <ul className='flex gap-4' aria-label='Tecnologias utilizadas'>
            {projectSkills.map((skill, index) => (
              <li key={index}>
                <Image
                  src={skill.iconUrl}
                  alt={skill.alt}
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>
        </div>
        <section className='flex flex-col gap-2'>
          <h2 className='text-xl font-heebo font-medium leading-6'>
            {project.title[locale]}
          </h2>
          <p className='font-heebo leading-6 line-clamp-3 dark:text-txt2-dark text-txt2-light'>
            {project.description[locale]}
          </p>
        </section>
      </header>

      {/* 2. FOOTER: z-20 garante que os botões fiquem ACIMA do link fantasma */}
      <footer className='flex gap-4 text-blue-700 relative z-20'>
        <a
          href={project.links.deploy}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors p-1'
        >
          <ExternalLink size={24} />
        </a>
        <a
          href={project.links.github}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors p-1'
        >
          <Github size={24} />
        </a>
      </footer>
    </article>
  )
}
