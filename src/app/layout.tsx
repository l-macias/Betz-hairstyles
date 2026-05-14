import type { Metadata } from 'next';
import { Gilda_Display, Jost } from 'next/font/google';
import Script from 'next/script';
import '../styles/globals.css';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import WhatsAppFloating from '@/components/ui/WhatsappFloating';

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
  // Definimos la URL base para que todos los links internos de metadata sean absolutos
  metadataBase: new URL('https://betzpeinados.com.ar'),
  title: {
    default: 'Betz Peinados | Peinadora Profesional en Rosario, Argentina',
    template: '%s | Betz Peinados', // Esto permite que las subpáginas cambien el título automáticamente
  },
  description:
    'Peinados exclusivos para novias, quinceañeras, eventos sociales, graduaciones, editoriales y modelos en Rosario, Argentina. Recogidos, Pulidos, Boho, Clean Look',
  keywords: [
    'peinadora profesional Rosario',
    'peinados para bodas Rosario',
    'peinados para casamientos Rosario',
    'peinadora bodas Rosario Argentina',
    'peinados pulidos en Rosario',
    'peinados boho en Rosario',
    'peinados clean look en Rosario',
    'peinados editorial en Rosario',
    'peinados quinceañera Rosario',
    'hair stylist Rosario',
    'peinados para eventos Rosario',
    'maquillaje y peinado Rosario',
    'peinadora a domicilio Rosario',
    'peinados para modelos Rosario',
    'peinados editoriales Rosario',
    'Betz Peinados',
    'Betz Hairstyles',
  ],
  authors: [{ name: 'Betz Peinados' }],
  creator: 'Betz Peinados',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Betz Peinados | Alta Costura en Estilismo',
    description:
      'Bodas, quinceañeras, graduaciones, eventos sociales y editoriales. Peinados de alta gama en Rosario, Argentina.',
    siteName: 'Betz Peinados',
    url: '/',
    images: [
      {
        url: '/portfolio/5-rodete-alto-perlas.webp', // Imagen principal para compartir en redes
        width: 1200,
        height: 630,
        alt: 'Betz Peinados - Peinado ondas hollywood',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betz Peinados | Peinadora Profesional en Rosario',
    description:
      'Bodas, quinceañeras, graduaciones, eventos sociales y editoriales. Peinados de alta gama en Rosario.',
    images: ['/portfolio/1-recogido-bajo-novia.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'AwIN68lnkUbmdcJWHcg4Glt2eUCT5epXPkuS--Ybjow',
  },
  // Agregamos canonical para evitar contenido duplicado
  alternates: {
    canonical: '/',
  },
};

// ARREGLO 2: Cambié los "tudominio.com" por los enlaces reales.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Betz Peinados',
  image: 'https://betzpeinados.com.ar/portfolio/1-recogido-bajo-novia.webp',
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
        {/* --- GOOGLE ANALYTICS 4 --- */}
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
        <WhatsAppFloating />
      </body>
    </html>
  );
}
