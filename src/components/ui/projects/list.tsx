import { ProjectCard } from "./card";


export function Projects() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 w-full'>
      {Array.from({ length: 3 }).map((project, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  )
}
