"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  const [open, setOpen] = useState<string>("bodas");

  const activeService = SERVICES.find((s) => s.id === open)!;

  return (
    <section
      id="servicios"
      className="bg-petal py-[clamp(4rem,10vw,7rem)]"
    >
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-dusty mb-3">
            03 — Servicios
          </p>
          <h2 className="font-display text-noir leading-tight max-w-xl text-[clamp(2rem,5vw,3.8rem)]">
            Para cada ocasión,
            <br />
            <span className="italic text-dusty">una propuesta única.</span>
          </h2>
        </div>

        {/* Layout: lista izquierda + detalle derecha en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Lista de servicios — clickeable */}
          <div className="border-t border-dusty/25">
            {SERVICES.map((service, i) => (
              <div key={service.id}>
                <button
                  onClick={() => setOpen(service.id)}
                  className="w-full text-left flex items-center justify-between py-6 group transition-colors duration-300 border-b border-dusty/25"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-body text-[10px] text-dusty tracking-[0.1em] min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display transition-colors duration-300 text-[clamp(1.3rem,2.5vw,2rem)] ${
                        open === service.id ? "text-dusty italic" : "text-noir"
                      }`}
                    >
                      {service.title}
                    </span>
                    {service.badge && (
                      <span className="font-body hidden sm:inline text-[9px] tracking-[0.15em] uppercase bg-rose text-white px-2.5 py-[3px] rounded-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Indicador */}
                  <span
                    className={`font-body transition-transform duration-300 text-dusty text-[18px] ${
                      open === service.id ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Descripción mobile (debajo del item) */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-400 ${
                    open === service.id ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <p className="font-body text-charcoal leading-relaxed pb-6 text-[0.9rem] font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Panel de detalle — solo desktop */}
          <div className="hidden lg:flex flex-col justify-center">
            <div
              key={activeService.id}
              className="animate-[fadeIn_0.4s_ease]"
            >
              <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] italic text-dusty mb-4 leading-[1.3]">
                {activeService.shortDesc}
              </p>
              <p className="font-body text-charcoal leading-relaxed mb-8 text-[0.95rem] font-light leading-[1.8]">
                {activeService.description}
              </p>
              <a
                href="https://instagram.com/betzhairstyles"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-3 transition-colors duration-300 hover:text-dusty text-[10px] tracking-[0.25em] uppercase text-muted no-underline"
              >
                Consultar por este servicio ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}