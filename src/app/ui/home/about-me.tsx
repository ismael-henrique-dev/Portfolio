'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
// import {
//   SiTypescript,
//   SiNextdotjs,
//   SiSupabase,
//   SiTailwindcss,
// } from 'react-icons/si'

const timeline = [
  {
    year: '2023',
    text: 'Comecei o curso técnico integrado em Informática no IFCE, onde aprendi fundamentos de lógica de programação, HTML, CSS e JavaScript. Foi meu primeiro contato prático com desenvolvimento web.',
  },
  {
    year: '2024',
    text: 'Aprofundei meus estudos em React.js e TypeScript, criando projetos pessoais para consolidar o aprendizado. Também comecei a entender melhor a integração com backend.',
  },
  {
    year: '2025',
    text: 'Realizei meu primeiro freela, desenvolvendo telas de login e cadastro com autenticação via Supabase, usando Next.js. Segui estudando clean code, arquitetura de projetos e boas práticas.',
  },
  {
    year: 'Atualmente',
    text: 'Sigo evoluindo com projetos próprios e fortalecendo minha base técnica, enquanto busco minha primeira oportunidade profissional como desenvolvedor.',
  },
]

export function AboutMe() {
  return (
    <section className='w-full flex flex-col items-center'>
      <h2 className='font-heebo font-medium text-3xl mb-16 text-center'>
        Sobre mim
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-12'>
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className='origin-center'
        >
          <Image
            className='w-[300px] h-[300px] lg:w-[384px] lg:h-[384px] mb-6 lg:mb-0 rounded-lg object-cover'
            width={384}
            height={384}
            src={'/images/avatar.svg'}
            alt='Foto de perfil do Ismael Henrique'
          />
        </motion.div>

        {/* Info */}
        <div className='text-left space-y-6'>
          <div>
            <h3 className='font-lato font-black tracking-wide text-4xl mb-2'>
              Ismael Henrique
            </h3>
            <ul className='space-y-1 text-zinc-300'>
              <li>🚀 Desenvolvedor frontend desde 2023.</li>
              <li>🎓 Cursando informática.</li>
              <li>📱 Interesse em desenvolvimento frontend e mobile.</li>
              <li>💼 Em busca da primeira oportunidade como desenvolvedor.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className='flex flex-wrap gap-3 text-blue-400 text-2xl'>
            {/* <FaHtml5 title='HTML5' />
            <FaCss3Alt title='CSS3' />
            <FaJs title='JavaScript' />
            <SiTypescript title='TypeScript' />
            <FaReact title='React' />
            <SiNextdotjs title='Next.js' />
            <FaNodeJs title='Node.js' />
            <SiSupabase title='Supabase' />
            <SiTailwindcss title='Tailwind CSS' /> */}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className='lg:block hidden relative pt-10'>
        {/* Linha horizontal (desktop) */}
        <div className='w-full lg:block absolute top-[32px] h-[3px] bg-blue-500 z-0' />

        {/* <div className='block lg:hidden absolute left-[50%] top-0 bottom-0 w-[3px] bg-blue-500 z-0 translate-x-[-50%]' /> */}

        <div className='lg:flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-4'>
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className='relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start max-w-[280px] mx-auto'
            >
              {/* Ponto da linha */}
              <div className='w-4 h-4 rounded-full bg-blue-500 mb-4 lg:-mt-[14px] z-10 relative' />

              {/* Conteúdo */}
              <h4 className='text-blue-500 font-bold text-lg mb-2'>
                {item.year}
              </h4>
              <p className='text-zinc-300'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='lg:hidden mt-20 border-l-4 border-blue-500 pl-6 relative'>
        {[
          {
            year: '2023',
            text: 'Comecei o curso técnico integrado em Informática no IFCE, onde aprendi fundamentos de lógica de programação, HTML, CSS e JavaScript. Foi meu primeiro contato prático com desenvolvimento web.',
          },
          {
            year: '2024',
            text: 'Aprofundei meus estudos em React.js e TypeScript, criando projetos pessoais para consolidar o aprendizado. Também comecei a entender melhor a integração com backend.',
          },
          {
            year: '2025',
            text: 'Realizei meu primeiro freela, desenvolvendo telas de login e cadastro com autenticação via Supabase, usando Next.js. Segui estudando clean code, arquitetura de projetos e boas práticas.',
          },
          {
            year: 'Atualmente',
            text: 'Sigo evoluindo com projetos próprios e fortalecendo minha base técnica, enquanto busco minha primeira oportunidade profissional como desenvolvedor.',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className='mb-10 relative'
          >
            <div className='absolute -left-[36px] top-0 w-5 h-5 bg-blue-500 rounded-full' />
            <h4 className='font-bold text-lg text-blue-400'>{item.year}</h4>
            <p className='text-zinc-300 mt-2 max-w-2xl'>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
