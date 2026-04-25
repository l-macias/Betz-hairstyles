"use client";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contacto" className="bg-blush py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Texto */}
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-3">
              07 — Contacto
            </p>
            <h2 className="font-display text-noir leading-tight mb-6 text-[clamp(2rem,5vw,3.8rem)]">
              Hablemos por
              <br />
              <span className="italic text-rose">Instagram.</span>
            </h2>
            <p className="font-body text-charcoal leading-relaxed mb-3 text-[clamp(0.9rem,1.5vw,1rem)] font-light max-w-[400px]">
              El contacto es exclusivamente por mensaje directo en Instagram.
              Contame cuál es tu evento, la fecha y tus ideas — y te respondo lo
              antes posible.
            </p>
            <p className="font-body mb-10 text-[0.85rem] text-muted font-light">
              Sin formularios, sin esperas. Directo y personal.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-3 transition-colors duration-300 bg-rose text-white px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-normal no-underline rounded-sm hover:bg-dusty"
            >
              {/* SVG Instagram mini */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Escribirme en Instagram
            </a>
          </div>

          {/* Handle / card */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="bg-white border border-rose/20 p-[clamp(1.5rem,3vw,2.5rem)] rounded-sm w-full max-w-[360px] shadow-sm">
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4 mb-6">
                <div className="font-display flex items-center justify-center text-white w-[52px] h-[52px] rounded-full bg-rose text-[1.2rem] italic shrink-0">
                  B
                </div>
                <div>
                  <p className="font-body text-[14px] text-noir font-normal">
                    Betz Hairstyles
                  </p>
                  <p className="font-body text-[12px] text-muted">
                    {INSTAGRAM_HANDLE}
                  </p>
                </div>
              </div>

              <div className="border-t border-rose/15 pt-4">
                <div className="flex justify-between mb-3">
                  <p className="font-body text-[11px] text-muted">Ubicación</p>
                  <p className="font-body text-[11px] text-charcoal font-normal">
                    Rosario, Argentina
                  </p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="font-body text-[11px] text-muted">Contacto</p>
                  <p className="font-body text-[11px] text-rose font-normal">
                    Instagram DM
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-body text-[11px] text-muted">Servicio</p>
                  <p className="font-body text-[11px] text-charcoal font-normal">
                    Rosario y alrededores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}