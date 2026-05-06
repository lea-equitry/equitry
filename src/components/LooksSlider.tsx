'use client'

import { useState } from 'react'

const looks = [
  { img: '/cavalier-1.jpg', alt: 'Cavalier portant Equitry 1' },
  { img: '/cavalier-2.jpg', alt: 'Cavalier portant Equitry 2' },
  { img: '/cavalier-3.jpg', alt: 'Cavalier portant Equitry 3' },
  { img: '/cavalier-4.jpg', alt: 'Cavalier portant Equitry 4' },
  { img: '/cavalier-5.jpg', alt: 'Cavalier portant Equitry 5' },
  { img: '/cavalier-6.jpg', alt: 'Cavalier portant Equitry 6' },
  { img: '/cavalier-7.jpg', alt: 'Cavalier portant Equitry 7' },
  { img: '/cavalier-8.jpg', alt: 'Cavalier portant Equitry 8' },
]

export default function LooksSlider() {
  const [current, setCurrent] = useState(0)
  const visibleCount = 5
  const max = looks.length - visibleCount

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(max, c + 1))

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 0.75rem)))` }}
        >
          {looks.map((look, i) => (
            <div
              key={i}
              className="flex-none w-[calc(75%-1rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.75rem)] group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sage-lighter/20">
                <img
                  src={look.img}
                  alt={look.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-sage-darkest/0 group-hover:bg-sage-darkest/20 transition-all duration-300" />
              </div>
              <div className="mt-3">
                <a
                  href="https://equitry-location.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-poppins text-xs font-semibold tracking-widest uppercase text-sage-darkest border border-sage-darkest py-3 px-4 hover:bg-sage-darkest hover:text-cream transition-all duration-200"
                >
                  Réserver ce look
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute -left-4 top-[42%] -translate-y-1/2 w-10 h-10 bg-cream border border-sage-lighter/40 flex items-center justify-center shadow-md hover:bg-sage-darkest hover:text-cream hover:border-sage-darkest transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-10"
        aria-label="Photo précédente"
      >
        ←
      </button>
      <button
        onClick={next}
        disabled={current >= max}
        className="absolute -right-4 top-[42%] -translate-y-1/2 w-10 h-10 bg-cream border border-sage-lighter/40 flex items-center justify-center shadow-md hover:bg-sage-darkest hover:text-cream hover:border-sage-darkest transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-10"
        aria-label="Photo suivante"
      >
        →
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? 'bg-sage-darkest w-4' : 'bg-sage-lighter'}`}
            aria-label={`Aller à la photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
