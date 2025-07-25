import { ProjectCard } from './card'

export function Projects() {
  return (
    <div>
      {Array.from({ length: 3 }).map((project, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  )
}
