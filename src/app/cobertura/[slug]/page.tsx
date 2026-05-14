import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { COBERTURA_DATA } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data =
    COBERTURA_DATA[resolvedParams.slug as keyof typeof COBERTURA_DATA];
  if (!data) return { title: 'No encontrado | Betz Peinados' };
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

export async function generateStaticParams() {
  return Object.keys(COBERTURA_DATA).map((slug) => ({ slug }));
}

export default async function CoberturaPage({ params }: Props) {
  const resolvedParams = await params;
  const data =
    COBERTURA_DATA[resolvedParams.slug as keyof typeof COBERTURA_DATA];
  if (!data) notFound();

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
              Experiencia a Medida
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
                Consultar Zona
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
      <Footer />
    </main>
  );
}
