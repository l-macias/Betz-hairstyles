'use client';

import { useState } from 'react';
import { YOUTUBE_VIDEOS } from '@/lib/constants';

export default function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEOS[0].videoId);
  const [playing, setPlaying] = useState(false);

  const handlePlay = (videoId: string) => {
    setActiveVideo(videoId);
    setPlaying(true);
  };

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
              04 — Videos
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,5vw,3.8rem)]">
              Mirá cómo
              <br />
              <span className="italic text-rose">trabajo.</span>
            </h2>
          </div>
          <p className="font-body max-w-sm text-muted leading-relaxed hidden md:block text-[0.95rem] font-light">
            Tutoriales, detrás de escena y técnicas profesionales. Todo el
            proceso detallado en mi canal de YouTube.
          </p>
        </div>

        {/* Layout: Video principal + Lista */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Columna Izquierda: Reproductor Principal (Ocupa 8 de 12) ─── */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-sm pt-[56.25%] bg-noir shadow-[0_15px_40px_rgba(28,25,23,0.06)]">
              {playing ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="Video de Betz Hairstyles"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 group cursor-pointer"
                  onClick={() => setPlaying(true)}
                >
                  {/* Thumbnail de YouTube en Alta Calidad */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo}/maxresdefault.jpg`}
                    alt="Miniatura del video"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-50"
                  />
                  {/* Botón Play Premium */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:border-rose">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path d="M6 4l12 6-12 6V4z" fill="white" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Info del video activo debajo del reproductor */}
            {YOUTUBE_VIDEOS.filter((v) => v.videoId === activeVideo).map(
              (v) => (
                <div key={v.id} className="mt-5 flex items-center gap-4">
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white bg-rose px-3 py-1 rounded-sm">
                    {v.category}
                  </span>
                  <p className="font-display text-noir text-[1.2rem] italic">
                    {v.title}
                  </p>
                  <span className="font-body ml-auto text-[11px] text-muted tracking-wide">
                    {v.duration}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* ─── Columna Derecha: Playlist (Ocupa 4 de 12) ─── */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-white/50 p-6 md:p-8 rounded-sm border border-rose/10">
            <p className="font-body mb-2 text-[10px] tracking-[0.25em] uppercase text-rose">
              Playlist
            </p>
            {YOUTUBE_VIDEOS.map((v) => (
              <button
                key={v.id}
                onClick={() => handlePlay(v.videoId)}
                className={`text-left group flex items-center gap-4 p-3 transition-all duration-300 border-b last:border-b-0 cursor-pointer ${
                  activeVideo === v.videoId
                    ? 'border-rose border-b'
                    : 'border-rose/10 hover:border-rose/40'
                }`}
              >
                {/* Miniatura de la lista */}
                <div className="relative shrink-0 w-20 h-14 bg-noir rounded-sm overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                    alt={v.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === v.videoId ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}
                  />
                  {activeVideo !== v.videoId && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path d="M6 4l12 6-12 6V4z" fill="white" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className={`font-display text-[1rem] leading-tight line-clamp-2 transition-colors ${activeVideo === v.videoId ? 'text-rose italic' : 'text-charcoal group-hover:text-noir'}`}
                  >
                    {v.title}
                  </p>
                  <p className="font-body mt-1.5 text-[9px] tracking-wider text-muted uppercase">
                    {v.category} · {v.duration}
                  </p>
                </div>
              </button>
            ))}

            {/* Link al canal */}
            <a
              href="https://youtube.com/@betzhairstyles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-4 inline-flex items-center gap-2 py-2 text-[10px] tracking-[0.2em] uppercase text-charcoal transition-colors duration-300 hover:text-rose no-underline border border-rose/30 justify-center rounded-sm hover:border-rose"
            >
              Ir a mi Canal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
