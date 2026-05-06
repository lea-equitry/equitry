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
    images: [
      {
        url: 'https://www.equitry.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Equitry – Location de matériel équestre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equitry – Location de matériel équestre',
    description: 'Louez votre équipement équestre partout en France.',
    images: ['https://www.equitry.fr/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.equitry.fr',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#738C86' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#738C86',
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
