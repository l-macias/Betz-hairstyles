import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-petal flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-20">
        {/* El número gigante como elemento de diseño */}
        <h1 className="font-display text-8xl md:text-[150px] text-rose/20 leading-none mb-4">
          404
        </h1>

        <h2 className="font-display text-3xl md:text-5xl text-noir mb-6 italic">
          Página no encontrada
        </h2>

        <p className="font-body text-charcoal mb-10 max-w-md text-sm leading-relaxed">
          Lo sentimos, parece que el enlace que seguiste está roto o el
          contenido fue reubicado. Te invitamos a volver al inicio para conocer
          nuestros servicios.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-4 border border-noir text-noir font-body text-[10px] tracking-[0.2em] uppercase hover:bg-noir hover:text-white transition-colors duration-300"
        >
          Volver al Inicio
        </Link>
      </section>

      <Footer />
    </main>
  );
}
