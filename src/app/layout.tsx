import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Equitry – Location de matériel équestre partout en France',
    template: '%s | Equitry',
  },
  description:
    'Equitry : louez votre veste de concours, tapis de selle, capteurs équestres. Location à la journée ou abonnement mensuel, livraison partout en France.',
  keywords: [
    'location matériel équestre',
    'location veste concours équitation',
    'location tapis de selle',
    'abonnement équestre',
    'capteur équestre location',
    'Equisense location',
    'Safe HP location',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.equitry.fr',
    siteName: 'Equitry',
    title: 'Equitry – Location de matériel équestre partout en France',
    description:
      'Location à la journée ou abonnement mensuel. Vestes de concours, tapis de selle, capteurs. Livraison partout en France.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equitry – Location de matériel équestre',
    description: 'Louez votre équipement équestre partout en France.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.equitry.fr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
