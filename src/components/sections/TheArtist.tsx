import Image from 'next/image';

export default function TheArtist() {
  return (
    <section id="sobre-mi" className="bg-white py-[clamp(4rem,10vw,7rem)]">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Imagen Editorial (Izquierda) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1000" // TODO: Reemplazar con foto de Betz trabajando
                alt="Betz trabajando en un peinado de novia en Rosario"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Sello decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-petal rounded-full flex items-center justify-center p-4 animate-[spin_20s_linear_infinite] hidden md:flex">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    fontSize="11"
                    className="font-body uppercase tracking-widest fill-dusty"
                  >
                    <textPath href="#circle">
                      Estilista Profesional · Rosario ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto Biográfico (Derecha) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose mb-4">
              08 — The Artist
            </p>
            <h2 className="font-display text-noir leading-[1.1] mb-8 text-[clamp(2.5rem,5vw,4.5rem)]">
              Mi filosofía es <br />
              <span className="italic text-rose">tu identidad.</span>
            </h2>

            <div className="space-y-6 font-body text-charcoal font-light leading-[1.8] text-[clamp(0.95rem,1.5vw,1.1rem)]">
              <p>
                Soy Betz, especialista en estilismo y alta costura en peinados.
                Durante más de 8 años, he acompañado a novias, quinceañeras y
                modelos en Rosario y toda la región de Santa Fe, asegurándome de
                que su cabello no solo luzca impecable, sino que cuente su
                propia historia.
              </p>
              <p>
                No creo en los peinados &quot;en serie&quot;. Mi enfoque combina
                el estudio meticuloso de la estructura facial, el tipo de
                cabello y la estética general del evento para crear un diseño
                que soporte horas de movimiento sin perder su elegancia inicial.
              </p>
              <p>
                Desde la primera consulta por Instagram hasta el último retoque
                antes de salir, mi compromiso es brindarte un servicio premium,
                relajado y absolutamente personalizado.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-rose/15">
              <Image
                src="/firma-betz.svg" // TODO: Opcional, agregar un SVG con una firma estilo cursiva
                alt="Firma de Betz"
                width={120}
                height={40}
                className="opacity-60"
              />
              <p className="font-display text-2xl italic text-noir mt-2">
                Betz
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-muted mt-1">
                Founder & Lead Stylist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
