import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ESTILOS_DATA } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = ESTILOS_DATA[resolvedParams.slug as keyof typeof ESTILOS_DATA];

  if (!data) return { title: 'Estilo no encontrado | Betz Peinados' };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

export async function generateStaticParams() {
  return Object.keys(ESTILOS_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function EstiloPage({ params }: Props) {
  const resolvedParams = await params;
  const data = ESTILOS_DATA[resolvedParams.slug as keyof typeof ESTILOS_DATA];

  if (!data) notFound();

  const otrosEstilos = Object.entries(ESTILOS_DATA)
    .filter(([key]) => key !== resolvedParams.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-petal">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noir/40 z-10" />

        <div className="relative z-20 text-center px-6 mt-16">
          <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide">
            {data.h1}
          </h1>
          <div className="w-16 h-px bg-rose/60 mx-auto mt-6" />
        </div>
      </section>

      {/* ─── BLOQUE EDITORIAL ─── */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl mb-6 text-noir italic">
              Técnica y Detalle
            </h2>
            <p className="font-body text-charcoal leading-relaxed text-[15px]">
              {data.content}
            </p>
            <div className="mt-10">
              <a
                href="https://wa.me/5493413276428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-noir text-noir font-body text-[10px] tracking-[0.2em] uppercase hover:bg-noir hover:text-white transition-colors duration-300"
              >
                Consultar por este estilo
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-blush overflow-hidden rounded-sm">
            <Image
              src={data.image}
              alt={`Detalle de ${data.title}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── TELARAÑA SEO (Otros Estilos) ─── */}
      <section className="bg-white py-24 px-6 border-t border-rose/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl text-center mb-12 text-noir">
            Explorar más estilos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otrosEstilos.map(([slug, estilo]) => (
              <Link
                href={`/estilos/${slug}`}
                key={slug}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={estilo.image}
                    alt={estilo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-noir/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="font-display text-lg text-noir group-hover:text-rose transition-colors">
                  {estilo.h1}
                </h4>
                <p className="font-body text-[10px] tracking-widest text-charcoal uppercase mt-2">
                  Ver Detalles →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
