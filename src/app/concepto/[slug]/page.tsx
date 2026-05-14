import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CONCEPTO_DATA } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = CONCEPTO_DATA[resolvedParams.slug as keyof typeof CONCEPTO_DATA];
  if (!data) return { title: 'No encontrado | Betz Peinados' };
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

export async function generateStaticParams() {
  return Object.keys(CONCEPTO_DATA).map((slug) => ({ slug }));
}

export default async function ConceptoPage({ params }: Props) {
  const resolvedParams = await params;
  const data = CONCEPTO_DATA[resolvedParams.slug as keyof typeof CONCEPTO_DATA];
  if (!data) notFound();

  const otrosConceptos = Object.entries(CONCEPTO_DATA)
    .filter(([key]) => key !== resolvedParams.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-petal">
      <Navbar />
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

      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl mb-6 text-noir italic">
              Concepto
            </h2>
            <p className="font-body text-charcoal leading-relaxed text-[15px]">
              {data.content}
            </p>
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

      {/* Bloque de Interlinking específico para Concepto */}
      {otrosConceptos.length > 0 && (
        <section className="bg-white py-24 px-6 border-t border-rose/10">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-display text-2xl text-center mb-12 text-noir">
              Conocé más
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otrosConceptos.map(([slug, concepto]) => (
                <Link
                  href={`/concepto/${slug}`}
                  key={slug}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden mb-4">
                    <Image
                      src={concepto.image}
                      alt={concepto.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-noir/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h4 className="font-display text-lg text-noir group-hover:text-rose transition-colors">
                    {concepto.h1}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
