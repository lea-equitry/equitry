import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos | Equitry',
  description:
    'Equitry, le premier service de location de matériel équestre en France. L\'histoire d\'une cavalière qui a voulu rendre l\'équipement de qualité accessible à tous.',
}

export default function AProposPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Notre histoire</p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-6">
            À propos d'Equitry
          </h1>
          <div className="equitry-divider" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div>
            <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">
              Une idée née du terrain
            </h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Equitry est né d'un constat simple : l'équipement équestre de qualité est souvent inaccessible financièrement pour de nombreux cavaliers. Une veste de concours haut de gamme coûte plusieurs centaines d'euros — pour l'utiliser deux ou trois fois par an.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">
              La première en France
            </h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Lancée il y a trois ans en région PACA, Equitry est la première entreprise française de location de matériel équestre. Depuis, plus de 1 000 cavaliers nous ont fait confiance pour leurs concours, partout en France.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
              {[
                { titre: 'Accessibilité', desc: 'Du matériel haut de gamme pour tous les budgets, sans investissement.' },
                { titre: 'Durabilité', desc: 'Louer plutôt qu\'acheter, c\'est aussi un choix écologique et responsable.' },
                { titre: 'Proximité', desc: 'Un service humain, réactif, avec un vrai accompagnement de chaque client.' },
              ].map((v) => (
                <div key={v.titre} className="card">
                  <h3 className="font-poppins font-semibold text-sage-darkest mb-2">{v.titre}</h3>
                  <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-sage-lighter/30">
            <p className="font-poppins font-light text-sage-dark leading-relaxed mb-6">
              Une question, un projet, une idée ? On est là.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
