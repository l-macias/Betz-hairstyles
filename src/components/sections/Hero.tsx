"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const tag1Ref = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items: [React.RefObject<HTMLElement | null>, number][] = [
      [lineRef, 100],
      [tag1Ref, 250],
      [h1Ref, 380],
      [subRef, 540],
      [ctaRef, 660],
      [imgRef, 200],
    ];
    const timers = items.map(([ref, delay]) => {
      const el = ref.current;
      if (!el) return null;
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      return setTimeout(() => {
        el.style.transition =
          "opacity 1s cubic-bezier(0.19,1,0.22,1), transform 1s cubic-bezier(0.19,1,0.22,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
    return () => timers.forEach((t) => t && clearTimeout(t));
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-blush">
      {/* Grain texture overlay — sutil */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.4%22/%3E%3C/svg%3E')] bg-repeat"
        style={{ backgroundSize: "200px" }}
      />

      {/* Círculo decorativo — anclado al centro para que no se escape en pantallas gigantes */}
      <div className="absolute hidden lg:block w-[500px] h-[500px] rounded-full border border-rose/20 left-1/2 top-1/2 -translate-y-1/2 translate-x-[10%]" />

      {/* CONTENEDOR PRINCIPAL: Agregamos max-w-7xl y mx-auto para contener el ancho */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
        
        {/* ─── Columna izquierda: texto ─── */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left mt-10 lg:mt-0">
          
          {/* Línea decorativa + label */}
          <div
            className="flex items-center gap-4 mb-6"
            ref={lineRef as React.RefObject<HTMLDivElement>}
          >
            <div className="hidden lg:block w-10 h-px bg-rose" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose">
              Peinadora Profesional · Rosario
            </p>
          </div>

          {/* Heading principal */}
          <h1
            ref={h1Ref}
            className="font-display text-noir leading-[1.05] mb-6 text-[clamp(2.8rem,7vw,6.5rem)]"
          >
            El peinado
            <br />
            que soñaste
            <br />
            <span className="text-rose italic">para ese día.</span>
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="font-body text-charcoal leading-relaxed mb-8 max-w-sm text-[clamp(0.9rem,1.5vw,1.05rem)] font-light mx-auto lg:mx-0"
          >
            Estilismo exclusivo a domicilio con técnicas de fijación extrema. Disfrutá tu evento con la tranquilidad de que tu peinado va a durar toda la noche.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/5493410000000?text=Hola%20Betz!%20Vengo%20de%20tu%20web%20y%20quería%20consultarte%20disponibilidad%20para%20una%20fecha."
              target="_blank"
              rel="noopener noreferrer"
              className="font-body group inline-flex items-center gap-2.5 bg-rose text-white px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-dusty no-underline"
            >
              Consultar Fecha
            </a>

            <a
              href="#portfolio"
              className="font-body inline-flex items-center gap-2.5 border border-rose/50 text-charcoal px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-rose hover:text-rose no-underline"
            >
              Ver mi trabajo
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="flex gap-6 md:gap-8 mt-12 pt-8 border-t border-rose/20 justify-center lg:justify-start w-full lg:w-auto">
            {[
              { v: "+500", l: "peinados" },
              { v: "8 años", l: "experiencia" },
              { v: "Rosario", l: "a domicilio" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-rose text-[1.4rem] md:text-[1.6rem] leading-none">
                  {s.v}
                </p>
                <p className="font-body text-muted mt-1 text-[9px] md:text-[10px] tracking-[0.15em] uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Columna derecha: imagen ─── */}
        <div
          ref={imgRef}
          className="relative flex justify-center lg:justify-end items-center w-full pb-10 lg:pb-0"
        >
          {/* Contenedor responsivo de la imagen */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px]">
            {/* Sombra/marco decorativo */}
            <div className="absolute inset-0 border border-rose/35 translate-x-3 translate-y-3 rounded-sm" />

            {/* Imagen principal usando Aspect Ratio en vez de altos fijos */}
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-rose/5">
              <Image
                src="/hero-gold.webp"
                alt="Peinado de alta costura con ondas al agua en Rosario - Betz Hairstyles"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[center_5%] lg:object-[center_20%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-blush/15" />
            </div>

            {/* Pill flotante */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-left-6 bg-white px-4 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-rose shadow-[0_4px_20px_rgba(28,25,23,0.08)] rounded-sm whitespace-nowrap">
              ✦ Disponible en Rosario
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint - Solo en desktop para limpiar la pantalla en celular */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 animate-[fadeIn_1s_ease_1.2s_both]">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-rose" />
      </div>
    </section>
  );
}