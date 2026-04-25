"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="bg-petal py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Texto Descriptivo (Izquierda) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-dusty mb-3">
              10 — Transformaciones
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,4vw,3.5rem)] mb-6">
              El poder del <br />
              <span className="italic text-dusty">detalle.</span>
            </h2>
            <p className="font-body text-charcoal font-light leading-[1.8] text-[0.95rem] mb-6 max-w-sm">
              Deslizá para descubrir la transformación. Cada textura natural tiene el potencial de convertirse en una obra de arte estructurada, manteniendo el brillo y la salud del cabello intactos.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-dusty font-body text-[10px] tracking-widest uppercase">
              <span>Antes</span>
              <div className="w-12 h-px bg-dusty/30" />
              <span>Después</span>
            </div>
          </div>

          {/* Slider Interactivo (Derecha) */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-2xl aspect-[4/5] rounded-sm overflow-hidden select-none group shadow-xl">
              
              {/* Imagen Base (Antes) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000" // TODO: Reemplazar con foto de ANTES real
                  alt="Cabello al natural antes del peinado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Imagen Superpuesta (Después) con Clip Path */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600854497552-326922881fc1?q=80&w=1000" // TODO: Reemplazar con foto de DESPUÉS real
                  alt="Peinado profesional terminado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Etiquetas sutiles superpuestas */}
              <div className="absolute top-6 left-6 font-body text-white bg-black/20 backdrop-blur-md px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase rounded-sm">
                Antes
              </div>
              <div className="absolute top-6 right-6 font-body text-white bg-black/20 backdrop-blur-md px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase rounded-sm z-10">
                Después
              </div>

              {/* Línea Divisoria y Tirador */}
              <div 
                className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none z-20 transition-transform duration-75"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Botón Central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
              </div>

              {/* Input Nativo (El secreto del rendimiento) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Deslizador para comparar antes y después"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}