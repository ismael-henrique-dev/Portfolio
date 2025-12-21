import { Suspense } from 'react'
import { FiltersSkeleton } from '../skeletons'
import { Filters } from '../projects/filters'
import { Projects } from '../projects/list'

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='w-full flex flex-col items-center justify-center gap-16'
    >
      <h2 className='font-heebo font-medium text-3xl text-center'>Projetos</h2>
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>
      <Projects />
    </section>
  )
}
