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
    <section id="videos" className="bg-blush py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              04 — Videos
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2rem,5vw,3.8rem)]">
              Mirá cómo
              <br />
              <span className="italic text-rose">trabajo.</span>
            </h2>
          </div>
          <p className="font-body max-w-xs text-muted leading-relaxed hidden md:block text-[0.85rem] font-light">
            Tutoriales, behind the scenes y técnicas profesionales. Todo en mi
            canal de YouTube.
          </p>
        </div>

        {/* Layout: video principal + lista */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Video principal */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-sm pt-[56.25%] bg-noir">
              {playing ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="Video de Betz Hairstyles"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Thumbnail de YouTube */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo}/maxresdefault.jpg`}
                    alt="Miniatura del video"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-rose border-none cursor-pointer transition-transform duration-300 hover:scale-105"
                    aria-label="Reproducir video"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6 4l12 6-12 6V4z" fill="#FDFAF8" />
                    </svg>
                  </button>
                  <p className="relative z-10 font-body text-white text-[11px] tracking-[0.2em] uppercase">
                    Reproducir
                  </p>
                </div>
              )}
            </div>

            {/* Info del video activo */}
            {YOUTUBE_VIDEOS.filter((v) => v.videoId === activeVideo).map(
              (v) => (
                <div key={v.id} className="mt-4 flex items-center gap-4">
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white bg-rose px-2.5 py-[3px] rounded-sm">
                    {v.category}
                  </span>
                  <p className="font-display text-noir text-[1.1rem] italic">
                    {v.title}
                  </p>
                  <span className="font-body ml-auto text-[11px] text-muted">
                    {v.duration}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Lista de videos */}
          <div className="flex flex-col gap-3">
            <p className="font-body mb-2 text-[10px] tracking-[0.25em] uppercase text-muted">
              Más videos
            </p>
            {YOUTUBE_VIDEOS.map((v) => (
              <button
                key={v.id}
                onClick={() => handlePlay(v.videoId)}
                className={`text-left group flex items-center gap-3 p-3 transition-all duration-300 border rounded-sm cursor-pointer ${
                  activeVideo === v.videoId
                    ? 'bg-petal border-rose'
                    : 'bg-transparent border-rose/20'
                }`}
              >
                {/* Thumbnail miniatura */}
                <div className="relative shrink-0 w-16 h-11 bg-noir rounded-sm overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.videoId}/default.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                      <path d="M6 4l12 6-12 6V4z" fill="#C4967A" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-display text-noir text-[0.9rem] italic leading-tight truncate">
                    {v.title}
                  </p>
                  <p className="font-body mt-1 text-[10px] text-muted">
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
              className="font-body mt-2 inline-flex items-center gap-2 py-1 text-[10px] tracking-[0.2em] uppercase text-muted transition-colors duration-300 hover:text-rose no-underline"
            >
              Ver canal completo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
