import { MetadataRoute } from 'next';
import {
  SERVICIOS_DATA,
  ESTILOS_DATA,
  CONCEPTO_DATA,
  COBERTURA_DATA,
} from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://betzpeinados.com.ar'; // Cambiá esto por tu dominio final

  const homeRoute = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Mapeamos automáticamente todas las rutas de los 4 archivos de datos
  const generateRoutes = (dataObj: any, prefix: string, priority: number) =>
    Object.keys(dataObj).map((slug) => ({
      url: `${baseUrl}/${prefix}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priority,
    }));

  return [
    ...homeRoute,
    ...generateRoutes(SERVICIOS_DATA, 'servicios', 0.9),
    ...generateRoutes(ESTILOS_DATA, 'estilos', 0.8),
    ...generateRoutes(COBERTURA_DATA, 'cobertura', 0.7),
    ...generateRoutes(CONCEPTO_DATA, 'concepto', 0.7),
  ];
}
