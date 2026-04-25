// ─── Instagram ────────────────────────────────────────────────────────────────
export const INSTAGRAM_HANDLE = '@betzhairstyles';
export const INSTAGRAM_URL = 'https://instagram.com/betzhairstyles';

// ─── Portfolio ────────────────────────────────────────────────────────────────
// Reemplazá las imágenes con las fotos reales de Betz.
// Tip: Asegurate de pasarlas por un compresor (como TinyPNG) antes de subirlas.
// size: "tall" | "wide" | "square"
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Recogido Bajo Texturizado',
    category: 'Bodas',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Ondas al Agua Clásicas',
    category: 'Eventos',
    image:
      'https://images.unsplash.com/photo-1594434032024-871d9f4d7be4?q=80&w=2000',
    size: 'square',
  },
  {
    id: 3,
    title: 'Semirecogido Boho Chic',
    category: 'Quinceañeras',
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000',
    size: 'square',
  },
  {
    id: 4,
    title: 'Wet Look High Fashion',
    category: 'Editorial',
    image:
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2000',
    size: 'tall',
  },
  {
    id: 5,
    title: 'Cola de Caballo con Volumen',
    category: 'Eventos',
    image:
      'https://images.unsplash.com/photo-1560066984-138daaa4ad53?q=80&w=2000',
    size: 'square',
  },
  {
    id: 6,
    title: 'Estructura Avant-Garde',
    category: 'Editorial',
    image:
      'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2000',
    size: 'square',
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
      'Las últimas tendencias en estilismo adaptadas a tu personalidad. Desde ondas descontracturadas hasta recogidos modernos. Incluye preparación del cabello para resistir impecable desde la recepción hasta el final de la fiesta.',
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

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '+500', label: 'Clientas felices' },
  { value: '8 años', label: 'De trayectoria profesional' },
  { value: 'Rosario', label: 'Servicio en estudio y a domicilio' },
  { value: '100%', label: 'Productos de primera línea' },
];

// ─── Testimonios ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Betz es una artista con todas las letras. El peinado me duró intacto hasta las 6 de la mañana, saltando y bailando. Además, la paz que transmite mientras te prepara no tiene precio.',
    name: 'Valentina M.',
    event: 'Novia · 2024',
    initials: 'VM',
  },
  {
    id: 2,
    quote:
      'Súper cálida y profesional. En la prueba entendió al instante lo que buscábamos. Mi hija brilló en sus 15 y el pelo le quedó tal cual la foto de Pinterest que le mostramos.',
    name: 'Claudia R.',
    event: 'Mamá de Quinceañera',
    initials: 'CR',
  },
  {
    id: 3,
    quote:
      'La elegimos para la campaña de la nueva temporada y el resultado en cámara fue espectacular. Súper rápida para los cambios de look en el set. Un placer trabajar así.',
    name: 'Lara F.',
    event: 'Productora de Moda',
    initials: 'LF',
  },
];

// ─── Videos YouTube ───────────────────────────────────────────────────────────
// Reemplazá los videoId con los IDs reales del canal de Betz.
// El ID es lo que va después de ?v= en la URL de YouTube.
export const YOUTUBE_VIDEOS = [
  {
    id: 1,
    videoId: 'dQw4w9WgXcQ', // ← reemplazar
    title: 'VLOG: Preparando a una novia real',
    category: 'Detrás de escena',
    duration: '08:45',
  },
  {
    id: 2,
    videoId: 'dQw4w9WgXcQ', // ← reemplazar
    title: 'Cómo lograr ondas perfectas (y que duren)',
    category: 'Tutorial',
    duration: '12:20',
  },
  {
    id: 3,
    videoId: 'dQw4w9WgXcQ', // ← reemplazar
    title: 'Mis 5 productos infaltables en el maletín',
    category: 'Tips & Reseñas',
    duration: '06:15',
  },
];
