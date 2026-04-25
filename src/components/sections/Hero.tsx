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
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-blush">
      {/* Grain texture overlay — sutil */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.4%22/%3E%3C/svg%3E')] bg-repeat"
        style={{ backgroundSize: "200px" }}
      />

      {/* Círculo decorativo — fondo */}
      <div className="absolute hidden lg:block w-[520px] h-[520px] rounded-full border border-rose/20 right-[calc(35%-260px)] top-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
        {/* ─── Columna izquierda: texto ─── */}
        <div className="flex flex-col justify-center">
          {/* Línea decorativa + label */}
          <div
            className="flex items-center gap-4 mb-8"
            ref={lineRef as React.RefObject<HTMLDivElement>}
          >
            <div className="w-10 h-px bg-rose" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose">
              Peinadora Profesional · Rosario
            </p>
          </div>

          {/* Heading principal */}
          <h1
            ref={h1Ref}
            className="font-display text-noir leading-[1.05] mb-6 text-[clamp(3.2rem,7vw,6.5rem)]"
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
            className="font-body text-charcoal leading-relaxed mb-10 max-w-sm text-[clamp(0.9rem,1.5vw,1.05rem)] font-light"
          >
            Bodas, quinceañeras, eventos sociales, editoriales y modelos. Cada
            ocasión es única — tu peinado también.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="font-body group inline-flex items-center gap-2.5 bg-rose text-white px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-dusty no-underline"
            >
              Ver mi trabajo
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://instagram.com/betzhairstyles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-2.5 border border-rose/50 text-charcoal px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-rose hover:text-rose no-underline"
            >
              Escribirme ↗
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="flex gap-8 mt-14 pt-10 border-t border-rose/20">
            {[
              { v: "+500", l: "peinados" },
              { v: "8 años", l: "experiencia" },
              { v: "Rosario", l: "y alrededores" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-rose text-[1.6rem] leading-none">
                  {s.v}
                </p>
                <p className="font-body text-muted mt-1 text-[10px] tracking-[0.15em] uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Columna derecha: imagen ─── */}
        <div
          ref={imgRef}
          className="relative flex justify-center lg:justify-end items-center"
        >
          {/* Marco fotográfico con offset */}
          <div className="relative">
            {/* Sombra/marco decorativo desplazado */}
            <div className="absolute inset-0 border border-rose/35 translate-x-3.5 translate-y-3.5 rounded-sm" />

            {/* Imagen principal */}
            <div className="relative overflow-hidden w-[clamp(280px,35vw,480px)] h-[clamp(380px,55vh,640px)] rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000"
                alt="Betz — Peinadora Profesional en Rosario"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-blush/15" />
            </div>

            {/* Pill flotante — categoría */}
            <div className="absolute -bottom-6 -left-5 bg-white px-4 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-rose shadow-[0_4px_20px_rgba(28,25,23,0.08)] rounded-sm">
              ✦ Disponible en Rosario
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-[fadeIn_1s_ease_1.2s_both]">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-rose" />
      </div>
    </section>
  );
}