"use client";

import Image from "next/image";
import { useState } from "react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const categoryLabel: Record<string, string> = {
  Bodas: "Bodas",
  Quinceañeras: "Quinceañeras",
  Eventos: "Eventos",
  Editorial: "Editorial",
};

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="bg-white"
      style={{ padding: "clamp(4rem,10vw,7rem) 0" }}
    >
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
            02 — Portfolio
          </p>
          <h2
            className="font-display text-noir leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Cada peinado,
            <br />
            <span className="text-rose italic">una historia.</span>
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

      {/* Grid asimétrica */}
      <div className="px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-12 gap-3">
        {PORTFOLIO_ITEMS.map((item) => {
          const colSpan =
            item.size === "tall"   ? "md:col-span-4" :
            item.size === "wide"   ? "md:col-span-8" :
                                     "md:col-span-4";
          const aspect =
            item.size === "tall"   ? "aspect-[3/4]" :
            item.size === "wide"   ? "aspect-[16/9]" :
                                     "aspect-square";

          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden cursor-pointer ${colSpan}`}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className={`relative ${aspect} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={`${item.title} — ${categoryLabel[item.category]} — Betz Hairstyles Rosario`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Hover overlay optimizado con Tailwind */}
                <div className="absolute inset-0 flex items-end p-5 md:p-6 transition-all duration-500 bg-gradient-to-t from-transparent to-transparent group-hover:from-noir/60 group-hover:via-noir/20 group-hover:to-transparent">
                  <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="font-body block mb-1 text-[9px] tracking-[0.3em] uppercase text-petal">
                      {item.category}
                    </span>
                    <p
                      className="font-display text-white italic"
                      style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile link */}
      <div className="mt-10 px-6 md:hidden text-center">
        <a
          href="https://instagram.com/betzhairstyles"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[10px] tracking-[0.3em] uppercase text-muted hover:text-rose transition-colors duration-300 no-underline"
        >
          Ver más en Instagram ↗
        </a>
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