'use client';

import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-white w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
            05 — Lo que dicen
          </p>
          <h2 className="font-display text-noir leading-tight text-[clamp(2.5rem,5vw,3.8rem)]">
            Clientes que
            <br />
            <span className="italic text-rose">confiaron en mí.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`flex flex-col justify-between p-8 lg:p-10 rounded-sm border border-rose/15 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                i === 1 ? 'bg-petal' : 'bg-blush'
              }`}
            >
              {/* Comilla decorativa */}
              <p className="font-display text-[4rem] text-rose/30 leading-[0.8] mb-5">
                &quot;
              </p>

              {/* Quote */}
              <blockquote className="font-display text-charcoal leading-relaxed flex-1 mb-10 text-[clamp(1rem,1.5vw,1.1rem)] italic">
                {t.quote}
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-4 border-t border-rose/10 pt-6">
                {/* Iniciales avatar */}
                <div className="font-body shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-rose text-white text-[11px] tracking-[0.1em] shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-[1.1rem] italic text-noir leading-none mb-1.5">
                    {t.name}
                  </p>
                  <p className="font-body text-[9px] text-muted tracking-[0.15em] uppercase">
                    {t.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
