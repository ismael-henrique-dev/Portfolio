import { skills } from '@/lib/utils'
import { ExternalLink, Github } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale() as 'pt-BR' | 'en'

  return (
    <Link
      href={`/project/${project.id}`}
      className='transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:bg-surf2-dark border border-transparent hover:border-blue-700 rounded-2xl'
    >
      <article className='dark:bg-surf1-dark bg-surf1-light w-full p-6 space-y-6 rounded-2xl shadow-sm'>
        <div className='bg-zinc-500 h-60 rounded-t-lg' />
        <header className='space-y-4'>
          <div className='flex justify-between'>
            <time className='dark:text-txt2-dark text-txt2-light text-sm font-heebo'>
              {project.createdAt}
            </time>
            <ul className='flex gap-4' aria-label='Tecnologias utilizadas'>
              {skills.slice(2).map((skill, index) => (
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
          <section className='flex flex-col gap-2 '>
            <h2 className='text-xl font-heebo font-medium leading-6 '>
              {project.title[locale]}
            </h2>
            <p className='font-heebo leading-6 line-clamp-3 dark:text-txt2-dark text-txt2-light'>
              {project.description[locale]}
            </p>
          </section>
        </header>
        <footer className='flex gap-4 text-blue-700'>
          <Link href=''>
            <ExternalLink />
          </Link>
          <Link href=''>
            <Github />
          </Link>
        </footer>
      </article>
    </Link>
  )
}
