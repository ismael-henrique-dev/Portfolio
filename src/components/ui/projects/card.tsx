import { skills } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

// type ProjectCardProps = {
//   title: string
//   description: string
//   date: string
//   links: {
//     name: string, href: string, icon: React.ElementType
//   }[],
//   imageUrl: string
// }

export function ProjectCard() {
  return (
    <article className='dark:bg-surf1-dark bg-surf1-light w-full p-6 space-y-6 rounded-2xl'>
      <div className='bg-zinc-500 h-60 rounded-t-lg' />
      <header className='space-y-4'>
        <div className='flex justify-between'>
          <time className='dark:text-txt2-dark text-txt2-light text-sm font-heebo'>
            Jul - 2023
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
            Nome do projeto
          </h2>
          <p className='font-heebo leading-6 line-clamp-3 dark:text-txt2-dark text-txt2-light'>
            Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis
            aliquam consequat nisi facilisi sed ac diam. Scelerisque nisi varius
            suscipit congue eget nunc neque mi. Placerat enim orci arcu
            habitasse morbi.
          </p>
        </section>
      </header>
      <footer>
        <Link href=''>G</Link>
        <Link href=''>G</Link>
        <Link href=''>G</Link>
      </footer>
    </article>
  )
}
