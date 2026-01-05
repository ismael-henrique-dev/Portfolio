'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type ProjectCarouselProps = {
  images: string[]
  title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='relative group'>
      {/* Container Principal do Embla */}
      <div
        className='overflow-hidden rounded-t-3xl bg-gradient-to-r from-blue-700 to-blue-300'
        ref={emblaRef}
      >
        <div className='flex lg:h-[540px] h-[400px]'>
          {images.map((src, index) => (
            <div
              key={index}
              className='relative flex-[0_0_100%] flex items-center justify-center p-8'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={src}
                  alt={`${title} - imagem ${index + 1}`}
                  fill
                  className='object-contain w-full'
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de Controle */}
      <button
        className='absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 text-white z-10 hover:bg-black/70 hover:cursor-pointer transition-colors'
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className='absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 text-white z-10 hover:bg-black/70 hover:cursor-pointer transition-colors'
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
