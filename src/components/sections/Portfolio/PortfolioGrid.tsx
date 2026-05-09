'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

const categoryLabel: Record<string, string> = {
  Bodas: 'Bodas',
  Quinceañeras: 'Quinceañeras',
  Eventos: 'Eventos',
  Editorial: 'Editorial',
};

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mini-componente interno para no repetir el código del hover 6 veces
  const PortfolioCard = ({ item }: { item: any }) => {
    const aspect = item.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square';

    return (
      <div
        className={`group relative overflow-hidden cursor-pointer w-full ${aspect} bg-blush shadow-sm`}
        onClick={() => setSelectedImage(item.image)}
      >
        <Image
          src={item.image}
          alt={`${item.title} — ${categoryLabel[item.category] || item.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {/* Overlay premium */}
        <div className="absolute inset-0 flex items-end p-5 md:p-6 transition-all duration-500 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 group-hover:opacity-100">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
            <span className="font-body block mb-1 text-[9px] tracking-[0.3em] uppercase text-petal drop-shadow-md">
              {item.category}
            </span>
            <p
              className="font-display text-white italic drop-shadow-lg leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
            >
              {item.title}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      className="bg-white w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-5xl px-6 md:px-12 mx-auto">
        {' '}
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              02 — Portfolio
            </p>
            <h2
              className="font-display text-noir leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}
            >
              Arte, técnica y
              <br />
              <span className="text-rose italic">precisión.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/betzhairstyles"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body hidden md:inline-flex items-center gap-2 text-muted hover:text-rose transition-colors duration-300 text-[10px] tracking-[0.25em] uppercase no-underline"
          >
            Ver más en Instagram ↗
          </a>
        </div>
        {/* ─── Layout Masonry / Asimétrico ─── */}
        {/* Vista Mobile (1 Columna, todo apilado) */}
        <div className="flex flex-col gap-4 md:hidden">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        {/* Vista Desktop (3 Columnas Flexibles) */}
        <div className="hidden md:grid grid-cols-3 gap-5 items-start">
          {/* Columna 1: Larga arriba + Cuadrada abajo */}
          <div className="flex flex-col gap-5">
            <PortfolioCard item={PORTFOLIO_ITEMS[0]} />{' '}
            {/* Recogido Bajo (Tall) */}
            <PortfolioCard item={PORTFOLIO_ITEMS[4]} />{' '}
            {/* Rodete Perlas (Square) */}
          </div>

          {/* Columna 2: Cuadrada arriba + Larga abajo */}
          <div className="flex flex-col gap-5">
            <PortfolioCard item={PORTFOLIO_ITEMS[1]} />{' '}
            {/* Semirecogido (Square) */}
            <PortfolioCard item={PORTFOLIO_ITEMS[3]} />{' '}
            {/* Trenza Boho (Tall) */}
          </div>

          {/* Columna 3: Larga arriba + Cuadrada abajo (Cierra el rectángulo) */}
          <div className="flex flex-col gap-5">
            <PortfolioCard item={PORTFOLIO_ITEMS[5]} />{' '}
            {/* Miss Earth (Tall) */}
            <PortfolioCard item={PORTFOLIO_ITEMS[2]} />{' '}
            {/* Glam Waves (Square) */}
          </div>
        </div>
        {/* Botón Mobile */}
        <div className="mt-10 md:hidden text-center">
          <a
            href="https://instagram.com/betzhairstyles"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex justify-center border border-rose/30 px-6 py-3 rounded-sm text-[10px] tracking-[0.3em] uppercase text-charcoal hover:border-rose hover:text-rose transition-colors duration-300 no-underline w-full"
          >
            Ver más en Instagram ↗
          </a>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-noir/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Detalle del peinado"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute top-6 right-6 font-body text-white text-xs tracking-[0.2em] uppercase hover:text-rose transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            Cerrar [X]
          </button>
        </div>
      )}
    </section>
  );
}
