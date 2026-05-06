import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.equitry.fr'

  const routes = [
    '',
    '/location-courte-duree',
    '/abonnement',
    '/capteurs',
    '/comment-ca-marche',
    '/faq',
    '/contact',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/location-courte-duree' || route === '/abonnement' ? 0.9 : 0.7,
  }))
}
