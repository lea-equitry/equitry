/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.wixstatic.com'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Empêche le clickjacking (intégration dans une iframe)
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Empêche le sniffing de type MIME
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Force HTTPS pendant 1 an
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Contrôle les infos envoyées au site suivant (referrer)
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Désactive les fonctionnalités navigateur non utilisées
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Protection XSS (navigateurs anciens)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Content Security Policy — autorise uniquement les sources légitimes
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formspree.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://static.wixstatic.com",
              "connect-src 'self' https://formspree.io",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
