import type { Metadata } from 'next';
import { Gilda_Display, Jost } from 'next/font/google';
import Script from 'next/script';
import '../styles/globals.css';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

// ARREGLO 1: Agregamos display: 'swap' para que el texto cargue al instante sin bloquear la pantalla
const gilda = Gilda_Display({
  subsets: ['latin'],
  variable: '--font-gilda',
  weight: '400',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Betz Peinados | Peinadora Profesional en Rosario, Argentina',
  description:
    'Peinados profesionales para bodas, quinceañeras, eventos sociales, editoriales y modelos en Rosario, Argentina. Más de 8 años de experiencia. Contacto por Instagram.',
  keywords: [
    'peinadora profesional Rosario',
    'peinados para bodas Rosario',
    'peinadora bodas Rosario Argentina',
    'peinados quinceañera Rosario',
    'hair stylist Rosario',
    'peinados para eventos Rosario',
    'maquillaje y peinado Rosario',
    'peinadora a domicilio Rosario',
    'peinados para modelos Rosario',
    'peinados editoriales Rosario',
    'Betz Hairstyles',
  ],
  authors: [{ name: 'Betz Peinados' }],
  creator: 'Betz Peinados',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Betz Peinados | Peinadora Profesional en Rosario',
    description:
      'Bodas, quinceañeras, eventos sociales, editoriales y modelos. Peinados de alta gama en Rosario, Argentina.',
    siteName: 'Betz Peinados',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betz Peinados | Peinadora Profesional en Rosario',
    description:
      'Bodas, quinceañeras, eventos y editoriales. Peinados de alta gama en Rosario.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'AwIN68lnkUbmdcJWHcg4Glt2eUCT5epXPkuS--Ybjow',
  },
};

// ARREGLO 2: Cambié los "tudominio.com" por los enlaces reales.
// Es crítico para que Google Maps y Google Search entiendan que es un negocio real.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Betz Peinados',
  image: 'https://betzpeinados.com.ar/hero-gold.webp',
  '@id': 'https://betzpeinados.com.ar',
  url: 'https://betzpeinados.com.ar',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rosario',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -32.9468,
    longitude: -60.6393,
  },
  sameAs: ['https://www.instagram.com/betzhairstyles'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${gilda.variable} ${jost.variable}`}>
      <body>
        {/* --- GOOGLE ANALYTICS 4 (Optimizado) --- */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0XBJ37DFC7`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0XBJ37DFC7');
            `,
          }}
        />
        <Script
          id="schema-hair-salon"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
