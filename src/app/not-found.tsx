import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-16">
      <div className="text-center px-6">
        <p className="font-poppins font-bold text-8xl text-sage-lighter mb-6">404</p>
        <h1 className="font-poppins font-bold text-3xl text-sage-darkest mb-4">Page introuvable</h1>
        <p className="font-lora text-sage-dark mb-8 max-w-md mx-auto">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary">Retour à l'accueil</Link>
      </div>
    </section>
  )
}
