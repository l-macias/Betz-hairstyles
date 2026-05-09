// ─── Instagram ────────────────────────────────────────────────────────────────
export const INSTAGRAM_HANDLE = '@betzhairstyles';
export const INSTAGRAM_URL = 'https://instagram.com/betzhairstyles';

// ─── Portfolio ────────────────────────────────────────────────────────────────
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Recogido alto Clean Look',
    category: 'Eventos',
    image: '/portfolio/1-recogido-bajo-novia.webp',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Semirecogido de Novia Pulido',
    category: 'Novias',
    image: '/portfolio/2-semirecogido-tocado.webp',
    size: 'square',
  },
  {
    id: 3,
    title: 'Semirecogido con Ondas Románticas',
    category: 'Eventos',
    image: '/portfolio/3-ondas-frente-glam.webp',
    size: 'square',
  },
  {
    id: 4,
    title: 'Trenza Boho',
    category: 'Eventos',
    image: '/portfolio/4-trenza-boho-largo.webp',
    size: 'tall',
  },
  {
    id: 5,
    title: 'Peinado con Ondas Rotas',
    category: 'Eventos',
    image: '/portfolio/5-rodete-alto-perlas.webp',
    size: 'square',
  },
  {
    id: 6,
    title: 'Ondas Hollywood',
    category: 'Eventos',
    image: '/portfolio/6-hollywood-waves-miss.webp',
    size: 'tall',
  },
];

// ─── Servicios ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'bodas',
    title: 'Novias',
    shortDesc: 'Tranquilidad absoluta para tu gran día.',
    description:
      'Diseño de peinado exclusivo con prueba previa. Evaluación de textura, visagismo y compatibilidad con el vestido y tocado. Acompañamiento integral y fijación de extrema duración. Servicio a domicilio o en hotel en Rosario y Gran Rosario.',
    badge: 'Servicio Premium',
    icon: '✦',
    seoAlt: 'Peinados de novia y casamientos a domicilio en Rosario',
  },
  {
    id: 'quinceaneras',
    title: 'Quinceañeras',
    shortDesc: 'Un estilo que aguante toda la noche.',
    description:
      'Las últimas tendencias en peinados adaptadas a tu personalidad. Desde ondas descontracturadas hasta recogidos modernos, asegurandote la duración de tu look toda la noche, para que la foto de tus quince sea la que siempre soñaste.',
    badge: null,
    icon: '◆',
    seoAlt: 'Peinados para fiestas de 15 años Rosario',
  },
  {
    id: 'eventos',
    title: 'Social & Eventos',
    shortDesc: 'Presencia magnética para invitadas.',
    description:
      'Madrinas, graduaciones, galas o cumpleaños. Servicio de peinado profesional con técnicas de salón que garantizan volumen, brillo y un acabado fotográfico perfecto.',
    badge: null,
    icon: '◈',
    seoAlt: 'Peinados para fiestas, madrinas y graduaciones Rosario',
  },
  {
    id: 'editorial',
    title: 'Moda & Editorial',
    shortDesc: 'Visión creativa para el set de fotos.',
    description:
      'Estilismo dinámico para producciones de moda, campañas publicitarias, desfiles y lookbooks. Trabajo en sinergia con directores de arte y fotógrafos, aportando técnica, velocidad y resolución en el set.',
    badge: 'Agencias',
    icon: '◉',
    seoAlt: 'Estilista peinadora para producciones de moda y modelos',
  },
];

export const STATS = [
  { value: '+500', label: 'Clientas felices' },
  { value: '8 años', label: 'De trayectoria profesional' },
  { value: 'Rosario', label: 'Servicio en estudio y a domicilio' },
  { value: '100%', label: 'Productos de primera línea' },
];

// lib/constants.ts

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Agustina',
    event: 'Novia de Día',
    quote:
      'Betz, no tengo palabras para agradecerte. El peinado duró impecable todo el día, incluso con el viento de la ceremonia al aire libre. Me sentí yo misma, pero elevada al 100%. Sos una artista.',
    image: '/images/testimonials/novia-eli.webp', // <-- Ruta a la foto de Agustina
    peinado: 'Ondas rotas con semirecogido boho.', // Detalle extra premium
  },
  {
    id: 2,
    name: 'Carla',
    event: 'Madrina',
    quote:
      'Excelente profesional. Entendió perfectamente lo que quería y lo adaptó a mi tipo de pelo. El recogido no se movió en toda la noche y recibí muchísimos cumplidos. La tranquilidad que te da Betz en la previa no tiene precio.',
    image: '/images/testimonials/madrina-carla.webp', // <-- Ruta a la foto de Carla
    peinado: 'Recogido bajo texturizado elegante.',
  },
  {
    id: 3,
    name: 'Lucía',
    event: 'Quinceañera',
    quote:
      '¡Amé mi peinado! Duró toda la fiesta, bailé un montón y quedó re lindo en las fotos. Betz es súper dulce y me re ayudó a elegir. ¡Gracias!',
    image: '/images/testimonials/quince-lucia.webp', // <-- Ruta a la foto de Lucía
    peinado: 'Coleta alta con volumen y ondas definidas.',
  },
];

export const YOUTUBE_VIDEOS = [
  {
    id: 1,
    videoId: 'dQw4w9WgXcQ',
    title: 'VLOG: Preparando a una novia real',
    category: 'Detrás de escena',
    duration: '08:45',
  },
  {
    id: 2,
    videoId: 'dQw4w9WgXcQ',
    title: 'Cómo lograr ondas perfectas (y que duren)',
    category: 'Tutorial',
    duration: '12:20',
  },
  {
    id: 3,
    videoId: 'dQw4w9WgXcQ',
    title: 'Mis 5 productos infaltables en el maletín',
    category: 'Tips & Reseñas',
    duration: '06:15',
  },
];
