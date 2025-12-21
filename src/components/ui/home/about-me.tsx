'use client'

import { aboutMeItems, skills, timeline } from '@/lib/utils'
import { motion } from 'motion/react'
import Image from 'next/image'

export function AboutMeSection() {
  return (
    <section
      id='about-me'
      className='w-full space-y-8 flex flex-col items-center px-5 py-8 rounded-2xl dark:bg-surf1-dark'
    >
      <h2 className='font-heebo font-medium text-3xl mb-16 text-center'>
        Sobre mim
      </h2>

      <div className='w-full justify-center lg:space-x-16 lg:items-start items-center flex flex-col xl:flex-row  gap-12'>
        {/* Avatar */}
        <motion.div
          // initial={{ opacity: 0, x: -200, scale: 0.5 }}
          // whileInView={{ opacity: 1, x: 0, scale: 1 }}
          // exit={{ opacity: 0, x: -200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className='origin-center'
        >
          <Image
            className='w-[300px] h-[300px]   xl:h-[440px] mb-6 lg:mb-0 rounded-lg object-cover'
            width={440}
            height={440}
            src={'/images/avatar.svg'}
            alt='Foto de perfil do Ismael Henrique'
          />
        </motion.div>

        {/* Info */}
        <div className='flex flex-col lg:items-end space-y-8'>
          {/* Skills */}
          <div className='flex flex-wrap gap-1.25 text-blue-400 text-2xl'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  key={index}
                  src={skill.iconUrl}
                  alt={skill.alt}
                  width={32}
                  height={32}
                />
              </motion.div>
            ))}
          </div>

          {/* About Items */}

          <div className='text-left space-y-6'>
            <div className='space-y-8'>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className='font-lato font-black tracking-wide text-4xl'
              >
                Ismael Henrique
              </motion.h3>
              <ul className='space-y-8 text-zinc-300'>
                {aboutMeItems.map((item, index) => {
                  const ItemIcon = item.icon

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className='flex gap-3 items-center'
                    >
                      <span className='bg-blue-600 p-1.5 flex justify-center items-center rounded-lg'>
                        <ItemIcon size={20} className='text-light' />
                      </span>
                      <h2 className='font-semibold font-lato lg:text-xl tracking-wide text-txt2-light dark:text-txt1-dark'>
                        {item.description}
                      </h2>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Desktop */}
      <div className='lg:block hidden relative pt-10'>
        <div className='w-full lg:block absolute top-[32px] h-[3px] bg-blue-500 z-0' />

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
              <h4 className='dark:text-txt1-dark text-text2-light font-bold text-lg mb-2'>
                {item.year}
              </h4>
              <p className='dark:text-txt1-dark text-text2-light'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Mobile */}
      {/* <div className='lg:hidden mt-8 border-l-4 border-blue-500 pl-6 relative'>
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className='mb-10 relative '
          >
            <div className='absolute -left-[36px] top-0 w-5 h-5 bg-blue-500 rounded-full' />
            <h4 className='font-bold text-lg -top-[36px] dark:text-txt1-dark text-text2-light'>
              {item.year}
            </h4>
            <p className='dark:text-text-secondary-dark text-t-secondary-light mt-2 max-w-2xl'>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div> */}
    </section>
  )
}
