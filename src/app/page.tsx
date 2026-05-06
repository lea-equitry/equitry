import type { Metadata } from 'next'
import Link from 'next/link'
import LooksSlider from '@/components/LooksSlider'

export const metadata: Metadata = {
  title: 'Equitry – Location de matériel équestre partout en France',
  description:
    'Louez votre veste de concours, tapis de selle ou capteur équestre dès 20€/jour. Abonnement mensuel disponible. Livraison partout en France.',
}

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
