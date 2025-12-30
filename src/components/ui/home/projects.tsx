import { Suspense } from 'react'
import { FiltersSkeleton } from '../skeletons'
import { Filters } from '../projects/filters'
import { Projects } from '../projects/list'
import { useTranslations } from 'next-intl'

export function ProjectsSection() {
  const t = useTranslations('HomePage.projects')

  return (
    <section
      id='projects'
      className='w-full flex flex-col items-center justify-center gap-16'
    >
      <h2 className='font-heebo font-medium text-3xl text-center'>{t('title')}</h2>
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>
      <Projects />
    </section>
  )
}
