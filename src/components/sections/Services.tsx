'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  // Usamos el primer ID dinámicamente para evitar que se rompa si cambias los nombres
  const [open, setOpen] = useState<string>(SERVICES[0]?.id || '');

  const activeService = SERVICES.find((s) => s.id === open) || SERVICES[0];

  return (
    <section
      id="servicios"
      className="bg-petal w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
            03 — Servicios
          </p>
          <h2 className="font-display text-noir leading-tight max-w-xl text-[clamp(2.5rem,5vw,3.8rem)]">
            Para cada ocasión,
            <br />
            <span className="italic text-rose">una propuesta única.</span>
          </h2>
        </div>

        {/* Layout: Lista izquierda + Detalle en tarjeta (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ─── Columna Izquierda: Acordeón (Ocupa 7 de 12) ─── */}
          <div className="lg:col-span-7 border-t border-rose/20">
            {SERVICES.map((service, i) => (
              <div key={service.id}>
                <button
                  onClick={() => setOpen(service.id)}
                  className={`w-full text-left flex items-center justify-between py-6 lg:py-8 group transition-all duration-500 border-b border-rose/20 hover:pl-4 ${
                    open === service.id ? 'pl-4' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-body text-[10px] tracking-[0.2em] transition-colors ${open === service.id ? 'text-rose' : 'text-muted'}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display transition-colors duration-300 text-[clamp(1.5rem,2.5vw,2.2rem)] ${
                        open === service.id
                          ? 'text-rose italic'
                          : 'text-charcoal group-hover:text-noir'
                      }`}
                    >
                      {service.title}
                    </span>
                    {service.badge && (
                      <span className="font-body hidden sm:inline text-[9px] tracking-[0.15em] uppercase bg-blush border border-rose/20 text-rose px-3 py-1 rounded-sm ml-2">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Indicador animado */}
                  <span
                    className={`font-body transition-transform duration-500 text-[18px] ${
                      open === service.id
                        ? 'rotate-45 text-rose'
                        : 'rotate-0 text-muted group-hover:text-rose'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Descripción Mobile */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    open === service.id
                      ? 'max-h-[300px] opacity-100 py-6'
                      : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <p className="font-body text-charcoal leading-relaxed text-[0.95rem] font-light">
                    {service.description}
                  </p>
                  <button
                    onClick={() => {
                      const contactSection =
                        document.getElementById('contacto');
                      if (contactSection)
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-rose hover:text-noir transition-colors"
                  >
                    Consultar disponibilidad ↗
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Columna Derecha: Tarjeta de Detalle (Ocupa 5 de 12) ─── */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center relative lg:pl-4">
            <div className="bg-white/50 border border-white backdrop-blur-sm p-10 xl:p-12 rounded-sm shadow-[0_20px_40px_rgba(28,25,23,0.03)]">
              <div
                key={activeService.id}
                className="animate-[fadeIn_0.5s_ease-out]"
              >
                <p className="font-display text-[1.6rem] xl:text-[1.8rem] italic text-rose mb-6 leading-tight">
                  {activeService.shortDesc}
                </p>

                <div className="w-12 h-px bg-rose/30 mb-6" />

                <p className="font-body text-charcoal mb-10 text-[1rem] font-light leading-[1.8]">
                  {activeService.description}
                </p>

                {/* Botón anclado al formulario */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contacto');
                    if (contactSection)
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body inline-flex items-center justify-center bg-transparent border border-rose/50 text-charcoal hover:bg-rose hover:text-white hover:border-rose px-8 py-4 transition-all duration-300 text-[10px] tracking-[0.25em] uppercase w-full cursor-pointer"
                >
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
