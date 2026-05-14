import Link from 'next/link';
import {
  SERVICIOS_DATA,
  ESTILOS_DATA,
  CONCEPTO_DATA,
  COBERTURA_DATA,
} from '@/lib/data';

export default function Footer() {
  // Convertimos todos los objetos de datos en arrays para iterarlos
  const serviciosLinks = Object.entries(SERVICIOS_DATA);
  const estilosLinks = Object.entries(ESTILOS_DATA);
  const conceptoLinks = Object.entries(CONCEPTO_DATA);
  const coberturaLinks = Object.entries(COBERTURA_DATA);

  return (
    <footer className="bg-noir text-petal pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Columna 1: Marca y Cobertura Geográfica */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-4xl tracking-wide text-white block mb-6 hover:text-rose transition-colors"
            >
              Betz
            </Link>
            <p className="font-body text-[11px] leading-relaxed tracking-widest uppercase text-white/60 mb-6">
              Trayectoria y Aprendizaje. <br />
              Diseño de peinados premium.
            </p>
            {/* El enlace a Cobertura se renderiza dinámicamente */}
            {coberturaLinks.map(([slug]) => (
              <Link
                key={slug}
                href={`/cobertura/${slug}`}
                className="inline-block font-body text-[10px] text-white/40 leading-relaxed hover:text-rose transition-colors duration-300"
              >
                Servicio a domicilio en Rosario,
                <br /> Funes y Roldán, Santa Fe.
              </Link>
            ))}
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white italic">
              Servicios
            </h4>
            <ul className="space-y-4">
              {serviciosLinks.map(([slug, data]) => (
                <li key={slug}>
                  <Link
                    href={`/servicios/${slug}`}
                    className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300"
                  >
                    {/* Limpiamos un poco los títulos largos para que queden prolijos */}
                    {data.h1
                      .replace('El Peinado de Novia que Soñaste', 'Novias')
                      .replace('Estilos Únicos para tus 15', '15 Años')
                      .replace('Tu Look de Graduación', 'Egresadas')
                      .replace(
                        'Estilismo para Invitadas y Madrinas',
                        'Eventos Sociales',
                      )
                      .replace(
                        'Estilismo Editorial y Comercial',
                        'Producciones y TV',
                      )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Estilos y La Marca (Concepto) */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white italic">
              Estilos
            </h4>
            <ul className="space-y-4 mb-10">
              {estilosLinks.map(([slug, data]) => (
                <li key={slug}>
                  <Link
                    href={`/estilos/${slug}`}
                    className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300"
                  >
                    {data.h1
                      .replace(' y Descontracturado', '')
                      .replace(' y Texturas', '')}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-xl mb-6 text-white italic">
              La Marca
            </h4>
            <ul className="space-y-4">
              {conceptoLinks.map(([slug, data]) => (
                <li key={slug}>
                  <Link
                    href={`/concepto/${slug}`}
                    className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300"
                  >
                    {data.h1
                      .replace('Calidad y ', '')
                      .replace('Sinergia en ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white italic">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5493413276428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300 block"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/betzhairstyles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300 block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/#contacto"
                  className="font-body text-[10px] tracking-widest uppercase text-white/60 hover:text-rose transition-colors duration-300 block mt-4"
                >
                  Agendar Cita
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea Divisoria Inferior */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Copyright y Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/40">
            © {new Date().getFullYear()} Betz Peinados. Todos los derechos
            reservados.
          </p>
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/40">
            Rosario, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
