'use client';

import { useState, useRef } from 'react';

// Ya no hace falta la propiedad 'poster', el navegador la genera solo.
const REELS = [
  {
    id: 1,
    title: 'Preparando a una novia y acompañantes',
    category: 'Detrás de escena',
    src: '/videos/reel-1.mp4',
  },
  {
    id: 2,
    title: 'Textura y volumen para quinceañeras',
    category: 'Transformación',
    src: '/videos/reel-2.mp4',
  },
  {
    id: 3,
    title: 'Producción para Miss Earth Santa Fe',
    category: 'Producción',
    src: '/videos/reel-3.mp4',
  },
  {
    id: 4,
    title: 'Trenza estilo Boho paso a paso',
    category: 'Tutorial',
    src: '/videos/reel-4.mp4',
  },
];

// Sub-componente para manejar el estado de cada video individualmente
function ReelCard({ reel }: { reel: (typeof REELS)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      // Si querés que arranquen con sonido al hacer clic, descomentá la línea de abajo:
      // videoRef.current.muted = false;
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full aspect-[9/16] rounded-sm overflow-hidden bg-noir group shadow-[0_10px_30px_rgba(28,25,23,0.05)]">
      {/* Video HTML5 Nativo con auto-miniatura */}
      <video
        ref={videoRef}
        src={`${reel.src}#t=0.1`} // Obliga a leer el primer milisegundo
        preload="metadata" // Descarga solo la data necesaria para la portada
        controls={isPlaying} // Muestra controles solo cuando se está reproduciendo
        playsInline
        onPause={() => setIsPlaying(false)} // Si lo pausan, vuelve a mostrar el diseño
        onEnded={() => setIsPlaying(false)} // Si termina, vuelve a mostrar el diseño
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
      />

      {/* Capa de diseño (Se oculta al reproducir) */}
      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

          {/* Botón Play Premium gigante que cubre toda la carta */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer border-none bg-transparent w-full h-full z-10"
            aria-label="Reproducir video"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:border-rose">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-1"
              >
                <path d="M6 4l12 6-12 6V4z" fill="white" />
              </svg>
            </div>
          </button>

          {/* Textos sobre el video */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 pointer-events-none z-10">
            <span className="font-body text-[8px] tracking-[0.2em] uppercase text-white bg-rose/90 backdrop-blur-sm px-2 py-1 rounded-sm mb-3 inline-block">
              {reel.category}
            </span>
            <p className="font-display text-white text-[1.1rem] md:text-[1.3rem] leading-tight italic drop-shadow-md line-clamp-2">
              {reel.title}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function VerticalVideoSection() {
  return (
    <section
      id="videos"
      className="bg-blush w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              04 — Mi Trabajo
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,5vw,3.8rem)]">
              El proceso
              <br />
              <span className="italic text-rose">en movimiento.</span>
            </h2>
          </div>
          <p className="font-body max-w-sm text-muted leading-relaxed hidden md:block text-[0.95rem] font-light">
            Detrás de escena, técnicas profesionales y resultados finales.
            Seguime en Instagram para ver más.
          </p>
        </div>

        {/* Grilla de Videos Verticales (Mapea el componente interno ReelCard) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>

        {/* Botón CTA hacia Instagram */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://instagram.com/betzhairstyles"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2.5 border border-rose/50 text-charcoal px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-rose hover:text-white hover:border-rose no-underline"
          >
            Ver más Reels en Instagram
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
