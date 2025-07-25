import { skills } from '@/app/lib/utils'
import Image from 'next/image'

export function ProjectCard() {
  return (
    <div>
      <div>
        <span>Jul - 2023</span>
        <div>
          {skills.slice(2).map((skill, index) => (
            <Image
              key={index}
              src={skill.iconUrl}
              alt={skill.alt}
              width={32}
              height={32}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
