'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo animamos elementos secundarios, NO el H1 ni la Imagen principal (LCP)
    const items: [React.RefObject<HTMLElement | null>, number][] = [
      [lineRef, 100],
      [subRef, 300],
      [ctaRef, 450],
      [statsRef, 600],
    ];
    const timers = items.map(([ref, delay]) => {
      const el = ref.current;
      if (!el) return null;
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      return setTimeout(() => {
        el.style.transition =
          'opacity 1s cubic-bezier(0.19,1,0.22,1), transform 1s cubic-bezier(0.19,1,0.22,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });
    return () => timers.forEach((t) => t && clearTimeout(t));
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-blush pt-[80px]">
      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.4%22/%3E%3C/svg%3E')] bg-repeat"
        style={{ backgroundSize: '200px' }}
      />

      <div className="absolute hidden lg:block w-[500px] h-[500px] rounded-full border border-rose/20 left-1/2 top-1/2 -translate-y-1/2 translate-x-[10%]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* ─── Columna izquierda ─── */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left mt-4 lg:mt-0">
          <div
            ref={lineRef as React.RefObject<HTMLDivElement>}
            className="flex items-center gap-4 mb-6"
          >
            <div className="hidden lg:block w-10 h-px bg-rose" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose">
              Peinadora Profesional · Rosario
            </p>
          </div>

          {/* H1 ESTATICO: Sin ref, sin JS. Aparece de golpe. */}
          <h1 className="font-display text-noir leading-[1.05] mb-6 text-[clamp(2.8rem,7vw,6.5rem)]">
            El peinado
            <br />
            que soñaste
            <br />
            <span className="text-rose italic">para ese día.</span>
          </h1>

          <p
            ref={subRef}
            className="font-body text-charcoal leading-relaxed mb-8 max-w-sm text-[clamp(0.9rem,1.5vw,1.05rem)] font-light mx-auto lg:mx-0"
          >
            Peinados exclusivos con técnicas de fijación extrema. Disfrutá tu
            evento con la tranquilidad de que tu look va a durar toda la noche.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection)
                  contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-body group inline-flex items-center gap-2.5 bg-rose text-charcoal px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-dusty cursor-pointer border-none"
            >
              Consultar Disponibilidad
            </button>

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

          <div
            ref={statsRef}
            className="flex gap-6 md:gap-8 mt-12 pt-8 border-t border-rose/20 justify-center lg:justify-start w-full lg:w-auto"
          >
            {[
              { v: 'Peinados', l: 'personalizados' },
              { v: 'Calidad', l: 'experiencia' },
              { v: 'Rosario', l: 'y alrededores' },
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

        {/* ─── Columna derecha ─── */}
        <div className="relative flex justify-center lg:justify-end items-center w-full pb-10 lg:pb-0">
          <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[460px]">
            <div className="absolute inset-0 border border-rose/35 translate-x-3 translate-y-3 rounded-sm" />

            {/* IMAGEN ESTATICA: Sin ref, sin JS. Aparece de golpe. */}
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-rose/5">
              <Image
                src="/hero-gold.webp"
                alt="Peinado de alta costura con ondas al agua en Rosario - Betz Peinados"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[center_5%] lg:object-[center_20%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-blush/15" />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-left-6 bg-white px-4 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-charcoal shadow-[0_4px_20px_rgba(28,25,23,0.08)] rounded-sm whitespace-nowrap">
              ✦ Disponible en Rosario
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
