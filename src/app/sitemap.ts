import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://betzpeinados.com.ar', //
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si en el futuro agregás una página de /blog o /academia, las sumamos acá abajo
  ];
}
