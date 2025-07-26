import { Filters } from '../projects/filters'
import { Projects } from '../projects/list'

export function ProjectsSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-16'>
      <h2 className='font-heebo font-medium text-3xl text-center'>
        Projetos
      </h2>
      <Filters />
      <Projects />
    </section>
  )
}
