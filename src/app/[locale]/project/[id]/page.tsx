import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Github,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import projectsData from '@/lib/projects.json'
import { getTranslations } from 'next-intl/server'

export default async function ProjectDetails(props: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await props.params
  const t = await getTranslations('ProjectDetails')

  const project = projectsData.find((p) => p.id === id) as Project

  if (!project) {
    return <div className='p-20 text-center'>Projeto não encontrado.</div>
  }

  const currentLocale = (locale === 'en' ? 'en' : 'pt-BR') as 'en' | 'pt-BR'

  return (
    <main className='min-h-screen bg-light dark:bg-dark lg:px-16 px-5 pb-5 space-y-8 w-full'>
      {/* Botão Voltar */}
      <Link
        href='/'
        className='inline-flex items-center justify-center w-10 h-10 rounded-lg shadow-lg dark:bg-surf1-dark bg-white  transition-colors'
      >
        <ArrowLeft size={20} />
      </Link>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 mx-auto'>
        {/* Coluna da Esquerda: Conteúdo */}
        <div className='space-y-6'>
          <article className='dark:bg-surf1-dark bg-white rounded-3xl overflow-hidden shadow-xl'>
            {/* Carousel Mock (Simulado) */}
            <div className='relative h-[400px] w-full bg-gradient-to-r from-purple-400 to-emerald-300 flex items-center justify-center group'>
              {/* <Image
                src={project.pictures[0]}
                alt={project.title}
                fill
                className='object-contain p-8'
              /> */}

              {/* Controles do Carrossel */}
              <button className='absolute left-4 p-2 rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity'>
                <ChevronLeft size={24} />
              </button>
              <button className='absolute right-4 p-2 rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity'>
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Texto e Detalhes */}
            <div className='p-8 space-y-6'>
              <div className='flex justify-between items-start'>
                <time className='text-zinc-400 text-sm font-heebo'>
                  {project.createdAt}
                </time>
                <div className='flex gap-3'>
                  {/* Aqui você pode mapear os ícones das tecnologias */}
                  <span className='text-blue-400'>●</span>
                  <span className='text-purple-400'>▲</span>
                </div>
              </div>

              <h1 className='text-3xl font-bold font-heebo'>
                {project.title[currentLocale]}
              </h1>

              <div className='space-y-4 text-zinc-300 font-heebo leading-relaxed'>
                <p>
                  <strong className='text-white'>Equipe: </strong>
                  {project.team.join(', ')}
                </p>

                <p>
                  <strong className='text-white'>Descrição: </strong>
                  {project.description[currentLocale]}
                </p>

                <div className='space-y-2'>
                  <h3 className='font-bold text-white'>Features:</h3>
                  <ul className='list-disc list-inside space-y-1'>
                    {project.features[currentLocale].map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Coluna da Direita: Sidebar Sticky */}
        <aside>
          <div className='dark:bg-surf1-dark bg-white p-8 rounded-3xl shadow-xl sticky top-8 space-y-6'>
            <h3 className='text-lg font-medium font-heebo'>
              {t('sidebar_title')}
            </h3>

            <div className='flex flex-col gap-4'>
              <Link
                href={project.links.deploy}
                target='_blank'
                className='flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-all'
              >
                <Globe size={20} />
                {t('view_site')}
              </Link>

              <Link
                href={project.links.github}
                target='_blank'
                className='flex items-center justify-center gap-2 bg-surf2-dark hover:bg-zinc-700 text-white py-3 rounded-md font-medium transition-all'
              >
                <Github size={20} />
                {t('repository')}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
