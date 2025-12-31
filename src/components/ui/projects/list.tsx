import { ProjectCard } from './card'

import projectsData from '@/lib/projects.json'

export function Projects() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 w-full'>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
