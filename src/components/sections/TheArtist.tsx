import Image from 'next/image';

export default function TheArtist() {
  return (
    <section
      id="sobre-mi"
      className="bg-white w-full flex justify-center overflow-hidden"
      style={{ padding: 'clamp(4rem,10vw,7rem) 0' }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* ─── Composición de Imágenes (Izquierda) ─── */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Foto Principal: Proceso y Calidez (Manos en acción) */}
            <div className="relative w-[85%] aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/portfolio/7-betz-artist-action.webp"
                alt="Betz peinando con luz natural - Detrás de escena"
                fill
                className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 85vw, 40vw"
              />
            </div>

            {/* Foto Secundaria: Autoridad (Miss Earth vestido rojo) */}
            <div className="absolute -bottom-10 right-0 w-[55%] aspect-[3/4] overflow-hidden rounded-sm border-8 border-white shadow-2xl z-10">
              <Image
                src="/portfolio/8-betz-miss-earth.webp"
                alt="Betz peinando a Miss Earth - Estilismo de alto nivel"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* ─── Texto Biográfico (Derecha) ─── */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-4">
              03 — Sobre mi
            </p>
            <h2 className="font-display text-noir leading-[1.1] mb-8 text-[clamp(2.5rem,5vw,4.5rem)]">
              Mi filosofía es <br />
              <span className="italic text-rose">tu identidad.</span>
            </h2>

            <div className="space-y-6 font-body text-charcoal font-light leading-[1.8] text-[clamp(0.95rem,1.5vw,1.1rem)]">
              <p>
                Soy Betz, peinadora profesional de la ciudad de Rosario,
                Argentina. He acompañado a cientos de clientas, asegurándome de
                que su cabello no solo luzca impecable ante las cámaras, sino
                que se mantenga intacto durante la intensidad de su evento.
              </p>
              <p>
                Mi experiencia abarca desde el acompañamiento integral de novias
                en su gran día, hasta la dirección de estilismo para
                producciones de moda y certámenes internacionales de belleza.
                Esta trayectoria me enseñó que cada peinado es único y merece un
                trato exclusivo.
              </p>
              <p>
                Mi enfoque combina el estudio meticuloso de tu estructura
                facial, la textura natural de tu cabello y la estética de tu
                vestido. Desde nuestra primera charla hasta el último retoque
                con el fijador, mi compromiso es brindarte un servicio premium,
                un ambiente relajado y un resultado que te haga sentir la mejor
                versión de vos misma.
              </p>
            </div>

            {/* Firma y Cargo */}
            <div className="mt-12 pt-10 border-t border-rose/15 flex items-center gap-6">
              <div>
                <p className="font-display text-3xl italic text-noir leading-none">
                  Betz
                </p>
                <p className="font-body text-[9px] uppercase tracking-widest text-muted mt-2">
                  Betania Castañeira
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
