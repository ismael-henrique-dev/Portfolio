import { ProjectCard } from './card'

import projectsData from '@/lib/projects.json'

export function Projects({ tech }: { tech: string }) {
  const filteredProjects =
    tech === 'all'
      ? projectsData
      : projectsData.filter((project) => project.technologies.includes(tech))

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 w-full'>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
