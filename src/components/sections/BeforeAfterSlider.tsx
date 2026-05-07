'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider() {
  // Arranca en el medio exacto (50%)
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section
      id="transformacion"
      className="bg-petal w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ─── Texto Descriptivo (Izquierda) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-dusty mb-3">
              05 — Transformaciones
            </p>
            <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,4vw,3.5rem)] mb-6">
              El poder del <br />
              <span className="italic text-dusty">detalle.</span>
            </h2>
            <p className="font-body text-charcoal font-light leading-[1.8] text-[0.95rem] mb-6 max-w-sm">
              Deslizá para descubrir la transformación. Cada textura natural
              tiene el potencial de convertirse en una obra de arte
              estructurada, manteniendo el brillo y la salud del cabello
              intactos.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-dusty font-body text-[10px] tracking-widest uppercase">
              <span>Antes</span>
              <div className="w-12 h-px bg-dusty/30" />
              <span>Después</span>
            </div>
          </div>

          {/* ─── Slider Interactivo (Derecha) ─── */}
          <div className="lg:col-span-7 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-sm overflow-hidden select-none group shadow-[0_20px_50px_rgba(28,25,23,0.08)]">
              {/* Imagen Base (Antes) - Queda de fondo */}
              <div className="absolute inset-0 bg-blush">
                <Image
                  src="/portfolio/10-despues.webp"
                  alt="Peinado profesional terminado por Betz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority // Carga rápida porque es clave en la UX
                />
              </div>

              {/* Imagen Superpuesta (Después) con Clip Path dinámico */}
              <div
                className="absolute inset-0 bg-white"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/portfolio/9-antes.webp"
                  alt="Cabello al natural antes del peinado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Etiquetas sutiles superpuestas */}
              <div className="absolute top-6 left-6 font-body text-white bg-black/30 backdrop-blur-md px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase rounded-sm pointer-events-none">
                Antes
              </div>
              <div className="absolute top-6 right-6 font-body text-white bg-black/30 backdrop-blur-md px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase rounded-sm z-10 pointer-events-none">
                Después
              </div>

              {/* Línea Divisoria y Tirador central */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 transition-transform duration-75 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Botón Central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-md border border-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                    <path d="M9 18l6-6-6-6" className="translate-x-3" />
                  </svg>
                </div>
              </div>

              {/* Input Nativo (Controlador invisible) */}
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
