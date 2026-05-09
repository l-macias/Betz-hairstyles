'use client';

import Image from 'next/image';

// Reemplazá estas rutas con los nombres de tus archivos reales
const CAPTURAS = [
  { id: 1, src: '/testimonios/captura1.jpeg' },
  { id: 2, src: '/testimonios/captura2.jpeg' },
  { id: 3, src: '/testimonios/captura3.jpeg' },
  { id: 4, src: '/testimonios/captura4.jpeg' },
  { id: 5, src: '/testimonios/captura5.jpeg' },
  { id: 6, src: '/testimonios/captura6.jpeg' },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-blush w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(3rem,8vw,5rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
            05 — Voces Reales
          </p>
          <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,5vw,3.8rem)]">
            La confianza
            <br />
            <span className="italic text-rose">de mis clientas.</span>
          </h2>
        </div>

        {/* Grilla estilo Pinterest - 2. Reduje el gap y el space-y para juntar las imágenes */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {CAPTURAS.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={item.src}
                alt={`Testimonio de clienta ${item.id}`}
                className="w-full h-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Footer de la sección - 3. Reduje drásticamente los márgenes (mt) y paddings (pt) */}
        <div className="mt-10 md:mt-12 text-center border-t border-rose/20 pt-8">
          <p className="font-body text-charcoal text-[0.95rem] mb-6 font-light">
            Mirá más historias reales y resultados en mi perfil.
          </p>
          <a
            href="https://instagram.com/betzhairstyles"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2.5 bg-white border border-rose/30 text-charcoal px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-rose hover:text-rose shadow-sm no-underline"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
