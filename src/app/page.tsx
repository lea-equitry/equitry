'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    icon: '🏇',
    title: 'Location courte durée',
    description: 'Vestes de concours, tapis de selle, capteurs. À partir de 20€/jour, tarifs dégressifs sur la durée et pour les packs. Livraison en France à domicile et en point relais.',
    href: 'https://equitry-location.fr/',
    cta: 'Découvrir le catalogue',
    external: true,
  },
  {
    icon: '🔄',
    title: 'Abonnement mensuel',
    description: 'Pantalon Horse Pilot à 29€/mois ou veste de concours à 49€/mois. Un échange par mois en point relais, sans engagement long terme.',
    href: '/abonnement',
    cta: "Découvrir l'abonnement",
    external: false,
  },
  {
    icon: '📡',
    title: 'Capteurs équestres',
    description: 'Capteurs Equisense et capteurs Safe HP (tension de rênes ou tapis capteur de pressions) disponibles à la location. Analysez votre pratique sans investissement.',
    href: '/capteurs',
    cta: 'Découvrir les capteurs',
    external: false,
  },
]

const stats = [
  { value: '1 000+', label: 'Cavaliers nous font confiance' },
  { value: '3 ans', label: "D'expérience en location équestre" },
  { value: 'France', label: 'Livraison partout en France' },
  { value: '48h', label: 'Délai de livraison' },
]

const howItWorks = [
  { step: '01', title: 'Choisissez', desc: 'Sélectionnez votre équipement et vos dates en ligne.' },
  { step: '02', title: 'Recevez', desc: 'Votre matériel arrive chez vous ou en point relais sous 48h.' },
  { step: '03', title: 'Profitez', desc: 'Utilisez votre équipement pour votre concours ou entraînement.' },
  { step: '04', title: 'Retournez', desc: "Renvoyez simplement le matériel dans l'emballage fourni." },
]

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

function LooksSlider() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const visibleCount = 5
  const max = looks.length - visibleCount

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(max, c + 1))

  return (
    <div className="relative">
      {/* Slider track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 0.75rem)))` }}
        >
          {looks.map((look, i) => (
            <div
              key={i}
              className="flex-none w-[calc(75%-1rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.75rem)] group"
            >
              {/* Photo format portrait Instagram */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sage-lighter/20">
                <img
                  src={look.img}
                  alt={look.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-sage-darkest/0 group-hover:bg-sage-darkest/20 transition-all duration-300" />
              </div>
              {/* Bouton réserver ce look */}
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

      {/* Flèches navigation */}
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

      {/* Dots */}
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-cream via-cream to-sage-lighter/20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-poppins text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage mb-4 sm:mb-6 leading-tight">
              Location de matériel équestre
            </p>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-7xl text-sage-darkest leading-[1.1] mb-4 sm:mb-6">
              Louez votre<br />
              <span className="text-sage">équipement</span><br />
              équestre
            </h1>
            <p className="font-poppins font-light text-base sm:text-lg text-sage-dark leading-relaxed mb-8 sm:mb-10">
              Vestes de concours, tapis de selle, capteurs connectés.
              À la journée ou par abonnement mensuel, livré partout en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://equitry-location.fr/" className="btn-primary text-center">
                Réserver maintenant
              </a>
              <Link href="/comment-ca-marche" className="btn-outline text-center">
                Comment ça marche
              </Link>
            </div>
            <p className="font-poppins font-light text-xs sm:text-sm text-sage-light mt-4 sm:mt-6 italic">
              À partir de 20€/jour · Pressing inclus · Livraison au choix · Retour simple
            </p>
          </div>

          {/* Visuel hero — masqué sur mobile */}
          <div className="relative hidden lg:block">
            <div className="w-full aspect-[16/11] rounded-sm overflow-hidden shadow-lg">
              <img
                src="/hero.png"
                alt="Cavalières en vestes de concours Equitry"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-sage-lighter/30 rounded-sm p-4 shadow-lg">
              <p className="font-poppins font-bold text-2xl text-sage-dark">1 000+</p>
              <p className="font-poppins font-light text-xs text-sage-light">cavaliers nous font confiance</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-sage-dark text-cream rounded-sm p-4 shadow-lg">
              <p className="font-poppins font-bold text-lg">Dès 20€</p>
              <p className="font-poppins text-xs text-cream/70">par jour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sage-darkest py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p className="font-poppins font-bold text-2xl sm:text-3xl text-cream mb-1 sm:mb-2">{s.value}</p>
                <p className="font-poppins font-light text-xs sm:text-sm text-cream/50 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Nos services</p>
            <h2 className="section-title">Une solution pour chaque cavalier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s) => (
              <div key={s.title} className="card group">
                <span className="text-4xl mb-4 sm:mb-6 block">{s.icon}</span>
                <h3 className="font-poppins font-bold text-xl text-sage-darkest mb-3 sm:mb-4">{s.title}</h3>
                <p className="font-poppins font-light text-sage-dark leading-relaxed mb-6 sm:mb-8">{s.description}</p>
                {s.external ? (
                  <a href={s.href} className="font-poppins text-sm font-semibold text-sage-dark hover:text-sage-darkest transition-colors tracking-wide uppercase border-b border-sage pb-1">
                    {s.cta} →
                  </a>
                ) : (
                  <Link href={s.href} className="font-poppins text-sm font-semibold text-sage-dark hover:text-sage-darkest transition-colors tracking-wide uppercase border-b border-sage pb-1">
                    {s.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-14 sm:py-24 bg-sage-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage-lighter mb-4">Simple et rapide</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cream">Comment ça marche ?</h2>
            <div className="w-12 h-0.5 bg-sage mx-auto mt-4 sm:mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <p className="font-poppins font-bold text-4xl sm:text-5xl text-sage/30 mb-3 sm:mb-4">{step.step}</p>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-cream mb-2 sm:mb-3">{step.title}</h3>
                <p className="font-poppins font-light text-xs sm:text-sm text-cream/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link href="/comment-ca-marche" className="btn-outline border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Cavaliers — slider Instagram */}
      <section className="py-14 sm:py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Nos Cavaliers</p>
            <h2 className="section-title mb-3">Ils portent Equitry</h2>
            <a
              href="https://instagram.com/equitry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-poppins text-sm text-sage-light hover:text-sage-dark transition-colors mt-2"
            >
              <span>📷</span>
              <span>Retrouvez notre communauté sur Instagram @equitry</span>
            </a>
          </div>
          <LooksSlider />
        </div>
      </section>

      {/* CTA abonnement */}
      <section className="py-14 sm:py-24 bg-sage-lighter/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Nouveau</p>
          <h2 className="section-title mb-4 sm:mb-6">
            {"L'abonnement équestre,"}<br />une première en France
          </h2>
          <p className="font-poppins font-light text-base sm:text-lg text-sage-dark leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            {"Equitry est le premier service d'abonnement à l'équipement équestre en France."}
            {" "}Accédez à du matériel haut de gamme dès 29€/mois, sans investissement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="card text-left w-full sm:max-w-xs">
              <p className="font-poppins font-bold text-2xl text-sage-dark mb-1">49€<span className="text-base font-normal text-sage-light">/mois</span></p>
              <p className="font-poppins font-semibold text-sage-darkest mb-2">Abonnement Veste</p>
              <p className="font-poppins font-light text-sm text-sage-light">1 échange de veste de concours par mois</p>
            </div>
            <div className="card text-left w-full sm:max-w-xs border-sage bg-sage-lighter/10">
              <p className="font-poppins font-bold text-2xl text-sage-dark mb-1">29€<span className="text-base font-normal text-sage-light">/mois</span></p>
              <p className="font-poppins font-semibold text-sage-darkest mb-2">Abonnement Pantalon</p>
              <p className="font-poppins font-light text-sm text-sage-light">1 pantalon Horse Pilot par mois</p>
            </div>
          </div>
          <Link href="/abonnement" className="btn-primary">
            {"Découvrir l'abonnement"}
          </Link>
        </div>
      </section>
    </>
  )
}
