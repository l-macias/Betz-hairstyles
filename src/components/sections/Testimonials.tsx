"use client";

import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-white py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
            05 — Lo que dicen
          </p>
          <h2 className="font-display text-noir leading-tight text-[clamp(2rem,5vw,3.8rem)]">
            Clientes que
            <br />
            <span className="italic text-rose">confiaron en mí.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`flex flex-col justify-between p-[clamp(1.5rem,3vw,2.5rem)] rounded-sm border border-rose/15 ${
                i === 1 ? "bg-petal" : "bg-blush"
              }`}
            >
              {/* Comilla decorativa */}
              <p className="font-display text-[4rem] text-rose/40 leading-[0.8] mb-5">
                &quot;
              </p>

              {/* Quote */}
              <blockquote className="font-display text-noir leading-snug flex-1 mb-8 text-[clamp(1rem,1.8vw,1.25rem)] italic">
                {t.quote}
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-3">
                {/* Iniciales avatar */}
                <div className="font-body shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-rose text-white text-[11px] tracking-[0.05em]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-[13px] text-noir leading-[1.2]">
                    {t.name}
                  </p>
                  <p className="font-body text-[10px] text-muted tracking-[0.1em] uppercase mt-0.5">
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