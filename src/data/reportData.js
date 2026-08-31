// Report Data for Web Analytics - La Metro (Julio, Agosto, Comparativa y Anual 2026)

export const formatNumber = (num) => {
  if (num === undefined || num === null) return "";
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// ==========================================
// 6 EXECUTIVE SUMMARY METRICS (ESTILO IMG 2)
// ==========================================
export const augustExecutiveMetrics = [
  {
    id: "visitors",
    label: "Visitantes Únicos",
    value: "20.377",
    exactValue: 20377,
    change: "+4.0%",
    changePeriod: "vs. mes anterior",
    isPositive: true,
    subtext: "+657 promedio diario",
    sparkline: [480, 510, 690, 720, 780, 740, 710, 410, 440, 780, 820, 890, 920, 790, 430, 460, 730, 710, 690, 670, 640, 390, 420, 780, 840, 880, 790, 750, 410, 430, 697],
    color: "green",
    description: "Total de personas individuales que accedieron al sitio web durante agosto."
  },
  {
    id: "views",
    label: "Páginas Vistas",
    value: "30.994",
    exactValue: 30994,
    change: "-3.2%",
    changePeriod: "vs. mes anterior",
    isPositive: false,
    subtext: "1.52 páginas por usuario",
    sparkline: [730, 780, 1040, 1100, 1180, 1120, 1080, 620, 670, 1190, 1250, 1350, 1400, 1200, 650, 700, 1110, 1080, 1050, 1020, 970, 590, 640, 1190, 1280, 1340, 1200, 1140, 620, 650, 1054],
    color: "rose",
    description: "Volumen total de páginas cargadas por los usuarios en el mes."
  },
  {
    id: "bounce_rate",
    label: "Tasa de Rebote",
    value: "75.5%",
    change: "+2.6%",
    changePeriod: "vs. mes anterior",
    isPositive: false, // In bounce rate, an increase is marked as an alert
    subtext: "24.5% interacción profunda",
    sparkline: [72, 73, 75, 74, 76, 75, 74, 76, 77, 75, 74, 76, 75, 74, 76, 77, 75, 76, 75, 74, 76, 77, 75, 74, 75, 76, 75, 74, 76, 77, 75.5],
    color: "rose",
    description: "Porcentaje de visitas que salieron tras ver una sola página sin navegar más. No siempre es negativo: si la persona contacta por WhatsApp inmediatamente, la página cumplió su objetivo. "
  },
  {
    id: "audience_ecuador",
    label: "Audiencia Ecuador",
    value: "19.100",
    exactValue: 19100,
    change: "95.3%",
    changePeriod: "del tráfico total",
    isPositive: true,
    subtext: "País #1 en captación",
    sparkline: [460, 490, 660, 690, 750, 710, 680, 390, 420, 750, 790, 850, 880, 760, 410, 440, 700, 680, 660, 640, 610, 370, 400, 750, 810, 840, 760, 720, 390, 410, 665],
    color: "green",
    description: "Concentración local masiva de usuarios en Ecuador, principalmente Quito."
  },
  {
    id: "top_referrer",
    label: "Canal Principal",
    value: "YouTube",
    change: "4.350",
    changePeriod: "visitas referidas",
    isPositive: true,
    subtext: "30.4% de referidos totales",
    sparkline: [110, 120, 140, 150, 160, 155, 145, 90, 95, 160, 170, 185, 190, 165, 95, 100, 150, 145, 140, 135, 130, 85, 90, 160, 175, 180, 165, 155, 90, 95, 145],
    color: "green",
    description: "YouTube se consolida como el mayor motor de atracción de prospectos externos."
  },
  {
    id: "star_career",
    label: "Carrera Estrella",
    value: "D. Industrial",
    change: "14.731",
    changePeriod: "páginas vistas",
    isPositive: true,
    subtext: "10.932 visitantes únicos",
    sparkline: [340, 360, 490, 510, 550, 520, 500, 290, 310, 550, 580, 630, 650, 560, 300, 320, 510, 490, 480, 470, 450, 270, 290, 550, 590, 620, 560, 530, 290, 300, 490],
    color: "green",
    description: "Diseño Industrial concentra el 83.9% de todo el interés académico del sitio."
  }
];

export const julyExecutiveMetrics = [
  {
    id: "visitors",
    label: "Visitantes Únicos",
    value: "19.603",
    exactValue: 19603,
    change: "-29.3%",
    changePeriod: "vs. mes previo",
    isPositive: false,
    subtext: "632 promedio diario",
    sparkline: [512, 580, 490, 320, 350, 610, 680, 980, 1120, 890, 420, 450, 850, 780, 710, 690, 620, 380, 410, 650, 720, 890, 810, 640, 390, 420, 710, 780, 690, 650, 621],
    color: "rose",
    description: "Visitantes únicos de Julio 2026."
  },
  {
    id: "views",
    label: "Páginas Vistas",
    value: "32.019",
    exactValue: 32019,
    change: "-24.4%",
    changePeriod: "vs. mes previo",
    isPositive: false,
    subtext: "1.63 páginas por usuario",
    sparkline: [820, 950, 780, 510, 560, 980, 1120, 1610, 1850, 1420, 680, 720, 1390, 1250, 1150, 1100, 990, 610, 650, 1040, 1180, 1460, 1320, 1020, 620, 670, 1160, 1280, 1130, 1060, 1019],
    color: "rose",
    description: "Páginas vistas registradas en Julio 2026."
  },
  {
    id: "bounce_rate",
    label: "Tasa de Rebote",
    value: "72.9%",
    change: "+1.8%",
    changePeriod: "vs. mes previo",
    isPositive: false,
    subtext: "27.1% interacción profunda",
    sparkline: [70, 71, 72, 73, 74, 73, 72, 74, 75, 73, 72, 73, 74, 73, 72, 73, 74, 75, 73, 72, 73, 74, 73, 72, 73, 74, 73, 72, 73, 74, 72.9],
    color: "rose",
    description: "Tasa de rebote en Julio 2026."
  },
  {
    id: "audience_ecuador",
    label: "Audiencia Ecuador",
    value: "18.200",
    exactValue: 18200,
    change: "95.2%",
    changePeriod: "del tráfico total",
    isPositive: true,
    subtext: "País #1 en captación",
    sparkline: [480, 550, 460, 300, 330, 580, 650, 930, 1060, 850, 400, 430, 810, 740, 680, 660, 590, 360, 390, 620, 690, 850, 770, 610, 370, 400, 680, 740, 660, 620, 590],
    color: "green",
    description: "Audiencia de Ecuador en Julio 2026."
  },
  {
    id: "top_referrer",
    label: "Canal Principal",
    value: "Google",
    change: "2.658",
    changePeriod: "visitas referidas",
    isPositive: true,
    subtext: "Búsquedas orgánicas",
    sparkline: [80, 90, 75, 50, 55, 95, 105, 150, 175, 140, 65, 70, 130, 120, 110, 105, 95, 60, 65, 100, 110, 140, 125, 100, 60, 65, 110, 120, 105, 100, 98],
    color: "green",
    description: "Búsquedas directas en Google en Julio 2026."
  },
  {
    id: "star_career",
    label: "Carrera Estrella",
    value: "D. Industrial",
    change: "13.845",
    changePeriod: "páginas vistas",
    isPositive: true,
    subtext: "Líder indiscutible",
    sparkline: [350, 410, 330, 220, 240, 420, 480, 690, 800, 610, 290, 310, 600, 540, 490, 470, 430, 260, 280, 450, 500, 630, 570, 440, 270, 290, 490, 540, 480, 450, 445],
    color: "green",
    description: "Carrera con mayor interés en Julio 2026."
  }
];

// ==========================================
// RANKING DE LAS 7 CARRERAS DE LA METRO
// ==========================================
export const metroCareersRanking = [
  {
    rank: 1,
    name: "Diseño Industrial",
    url: "https://lametro.edu.ec/carreras/diseno-industrial/",
    slug: "diseno-industrial",
    views: 14731,
    visitors: 10932,
    sharePercentage: 83.9,
    badge: "1º Lugar · Carrera Estrella",
    description: "Líder absoluto de atracción informativa en la web. Mayor volumen de consultas y descargas de malla.",
    trend: "+6.4% vs. julio"
  },
  {
    rank: 2,
    name: "Diseño de Modas",
    url: "https://lametro.edu.ec/carreras/diseno-modas/",
    slug: "diseno-modas",
    views: 657,
    visitors: 456,
    sharePercentage: 3.7,
    badge: "2º Lugar · Alta Interacción",
    description: "Fuerte atracción orgánica por nicho creativo, patronaje textil y tendencias de pasarela.",
    trend: "Líder en SEO orgánico GSC"
  },
  {
    rank: 3,
    name: "Diseño Gráfico",
    url: "https://lametro.edu.ec/carreras/diseno-grafico/",
    slug: "diseno-grafico",
    views: 505,
    visitors: 347,
    sharePercentage: 2.9,
    badge: "3º Lugar · Demanda Sostenida",
    description: "Búsquedas continuas de aspirantes interesados en comunicación visual, branding y packaging.",
    trend: "Interés continuo"
  },
  {
    rank: 4,
    name: "Diseño de Interiores",
    url: "https://lametro.edu.ec/carreras/diseno-interiores/",
    slug: "diseno-interiores",
    views: 481,
    visitors: 328,
    sharePercentage: 2.7,
    badge: "4º Lugar",
    description: "Atracción enfocada en arquitectura de espacios comerciales, diseño residencial y ambientación.",
    trend: "Estable"
  },
  {
    rank: 5,
    name: "Diseño Multimedia",
    url: "https://lametro.edu.ec/carreras/diseno-multimedia/",
    slug: "diseno-multimedia",
    views: 467,
    visitors: 320,
    sharePercentage: 2.7,
    badge: "5º Lugar",
    description: "Alta afinidad con contenidos en video, animación digital, modelado 3D y videojuegos.",
    trend: "Creciente en redes"
  },
  {
    rank: 6,
    name: "Diseño Fotográfico",
    url: "https://lametro.edu.ec/carreras/diseno-fotografico/",
    slug: "diseno-fotografico",
    views: 324,
    visitors: 245,
    sharePercentage: 1.8,
    badge: "6º Lugar",
    description: "Interés en fotografía profesional, iluminación publicitaria y dirección de arte visual.",
    trend: "Estable"
  },
  {
    rank: 7,
    name: "Diseño Publicitario",
    url: "https://lametro.edu.ec/carreras/diseno-publicitario/",
    slug: "diseno-publicitario",
    views: 316,
    visitors: 215,
    sharePercentage: 1.8,
    badge: "7º Lugar",
    description: "Enfoque en estrategia de marcas, campañas digitales, redacción creativa y medios de impacto.",
    trend: "Fidelización de prospectos"
  }
];

// ==========================================
// ARTÍCULOS DE BLOG Y NOTICIAS MÁS LEÍDOS
// ==========================================
export const topBlogPosts = [
  {
    title: "Quito Design Week ¡Larga vida al diseño ecuatoriano!",
    category: "Eventos / Institucional",
    monthlyViews: 99,
    annualViews: 260,
    impact: "Artículo #1 en tráfico orgánico del mes, impulsado por el interés en el diseño local."
  },
  {
    title: "Diseño Gráfico y Marketing Digital",
    category: "Orientación Vocacional",
    monthlyViews: 16,
    annualViews: 85,
    impact: "Atracción de aspirantes que buscan combinar creatividad con salidas laborales digitales."
  },
  {
    title: "5 diseñadoras gráficas que la están rompiendo",
    category: "Cultura & Referentes",
    monthlyViews: 16,
    annualViews: 249,
    impact: "Alto engagement en redes sociales; segundo artículo más leído en el consolidado anual."
  },
  {
    title: "Patronaje digital",
    category: "Diseño de Modas",
    monthlyViews: 16,
    annualViews: 193,
    impact: "Captación directa de prospectos para la carrera de Diseño de Modas."
  },
  {
    title: "¿En qué puedo trabajar si estudio diseño industrial?",
    category: "Orientación Vocacional",
    monthlyViews: 15,
    annualViews: 126,
    impact: "Resuelve dudas frecuentes de aspirantes, canalizando leads hacia admisiones."
  },
  {
    title: "El vestuario para las artes escénicas, otra alternativa...",
    category: "Diseño de Modas",
    monthlyViews: 10,
    annualViews: 83,
    impact: "Posicionamiento en nichos especializados de vestuario teatral y escenografía."
  },
  {
    title: "El arte de elegir carrera sin morir en el intento",
    category: "Admisiones / Guía",
    monthlyViews: 7,
    annualViews: 37,
    impact: "Contenido de apoyo para estudiantes de colegio en periodo de decisión vocacional."
  },
  {
    title: "Talento Multimedia en Fan Revival de Invasor ZIM",
    category: "Diseño Multimedia",
    monthlyViews: 3,
    annualViews: 19,
    impact: "Muestra de proyectos y capacidades de animación de los estudiantes de La Metro."
  }
];

// ==========================================
// COMPARATIVA MENSUAL (JULIO VS AGOSTO 2026)
// ==========================================
export const monthComparisonData = {
  metrics: [
    {
      metric: "Visitantes Únicos",
      july: 19603,
      august: 20377,
      diff: "+774",
      percentage: "+3.95%",
      isPositive: true,
      insight: "Crecimiento sostenido impulsado por campañas en YouTube y Facebook durante el cierre de admisiones."
    },
    {
      metric: "Páginas Vistas",
      july: 32019,
      august: 30994,
      diff: "-1.025",
      percentage: "-3.20%",
      isPositive: false,
      insight: "Ligera disminución en profundidad de navegación; los usuarios fueron más directos hacia páginas clave."
    },
    {
      metric: "Tasa de Rebote",
      july: "72.9%",
      august: "75.5%",
      diff: "+2.6%",
      percentage: "+3.56%",
      isPositive: false,
      insight: "Aumentó levemente por el tráfico proveniente de redes móviles donde el usuario consulta rápido y sale."
    },
    {
      metric: "Tráfico Referido (Enlaces)",
      july: 11224,
      august: 14296,
      diff: "+3.072",
      percentage: "+27.37%",
      isPositive: true,
      insight: "Fuerte despegue de referencias externas (+27.4%), con YouTube y Facebook aportando más de 6.600 visitas."
    },
    {
      metric: "Audiencia Móvil (Smartphones)",
      july: "80.4%",
      august: "82.6%",
      diff: "+2.2%",
      percentage: "+2.73%",
      isPositive: true,
      insight: "El tráfico móvil se consolida como el canal absoluto de acceso de la comunidad de La Metro."
    },
    {
      metric: "Tráfico Ecuador",
      july: "95.2%",
      august: "95.3%",
      diff: "+0.1%",
      percentage: "+0.10%",
      isPositive: true,
      insight: "Comportamiento geográfico altamente consistente y focalizado en el público objetivo nacional."
    }
  ],
  channelsComparison: [
    { channel: "YouTube (Video)", july: 2525, august: 4350, change: "+72.3%", isPositive: true },
    { channel: "Facebook (Móvil / Web)", july: 394, august: 2744, change: "+596.4%", isPositive: true },
    { channel: "Google Búsqueda Orgánica", july: 2126, august: 1466, change: "-31.0%", isPositive: false },
    { channel: "TikTok", july: 1567, august: 1199, change: "-23.5%", isPositive: false },
    { channel: "Google Ads (Pauta)", july: 1080, august: 635, change: "-41.2%", isPositive: false }
  ]
};

// ==========================================
// DATASET AGOSTO 2026
// ==========================================
export const reportPeriod = {
  monthName: "Agosto 2026",
  range: "1 de Agosto - 31 de Agosto, 2026",
};

export const dailyTraffic = [
  { day: "1 Ago", visitors: 480, views: 730 },
  { day: "2 Ago", visitors: 510, views: 780 },
  { day: "3 Ago", visitors: 690, views: 1040 },
  { day: "4 Ago", visitors: 720, views: 1100 },
  { day: "5 Ago", visitors: 780, views: 1180 },
  { day: "6 Ago", visitors: 740, views: 1120 },
  { day: "7 Ago", visitors: 710, views: 1080 },
  { day: "8 Ago", visitors: 410, views: 620 },
  { day: "9 Ago", visitors: 440, views: 670 },
  { day: "10 Ago", visitors: 780, views: 1190 },
  { day: "11 Ago", visitors: 820, views: 1250 },
  { day: "12 Ago", visitors: 890, views: 1350 },
  { day: "13 Ago", visitors: 920, views: 1400 },
  { day: "14 Ago", visitors: 790, views: 1200 },
  { day: "15 Ago", visitors: 430, views: 650 },
  { day: "16 Ago", visitors: 460, views: 700 },
  { day: "17 Ago", visitors: 730, views: 1110 },
  { day: "18 Ago", visitors: 710, views: 1080 },
  { day: "19 Ago", visitors: 690, views: 1050 },
  { day: "20 Ago", visitors: 670, views: 1020 },
  { day: "21 Ago", visitors: 640, views: 970 },
  { day: "22 Ago", visitors: 390, views: 590 },
  { day: "23 Ago", visitors: 420, views: 640 },
  { day: "24 Ago", visitors: 780, views: 1190 },
  { day: "25 Ago", visitors: 840, views: 1280 },
  { day: "26 Ago", visitors: 880, views: 1340 },
  { day: "27 Ago", visitors: 790, views: 1200 },
  { day: "28 Ago", visitors: 750, views: 1140 },
  { day: "29 Ago", visitors: 410, views: 620 },
  { day: "30 Ago", visitors: 430, views: 650 },
  { day: "31 Ago", visitors: 697, views: 1054 }
];

export const topPages = [
  { page: "Diseño Industrial", path: "/carreras/diseno-industrial/", views: 14731, visitors: 10932, category: "Carrera Académica", diagnosis: "Carrera #1 con récord de demanda informativa en el mes" },
  { page: "Carreras (Directorio General)", path: "/carreras/", views: 5653, visitors: 4506, category: "Oferta Académica", diagnosis: "Aspirantes explorando el abanico formativo" },
  { page: "Portada / Home Institucional", path: "/", views: 5002, visitors: 3769, category: "Institucional", diagnosis: "Página principal de bienvenida y marca" },
  { page: "Contacto / Admisiones", path: "/contacto/", views: 738, visitors: 604, category: "Conversión / Leads", diagnosis: "Canal de cierre y atención directa a prospectos" },
  { page: "Diseño de Modas", path: "/carreras/diseno-modas/", views: 657, visitors: 456, category: "Carrera Académica", diagnosis: "Alta interacción en diseño textil y moda" },
  { page: "Admisión | Estudia Diseño", path: "/admision/", views: 512, visitors: 371, category: "Admisiones", diagnosis: "Flujo enfocado al proceso de inscripción" },
  { page: "Diseño Gráfico", path: "/carreras/diseno-grafico/", views: 505, visitors: 347, category: "Carrera Académica", diagnosis: "Demanda continua en comunicación visual" },
  { page: "Diseño de Interiores", path: "/carreras/diseno-interiores/", views: 481, visitors: 328, category: "Carrera Académica", diagnosis: "Interés en espacios interiores y arquitectura" }
];

export const deviceCategories = [
  { category: "Smartphone (Celulares)", views: 16840, percentage: 82.6 },
  { category: "Desktop (Computadoras)", views: 1747, percentage: 8.6 },
  { category: "Phablet", views: 1612, percentage: 7.9 },
  { category: "Tablet (Tabletas)", views: 191, percentage: 0.9 },
  { category: "Otros / Peripheral", views: 1, percentage: 0 }
];

export const topCountries = [
  { country: "Ecuador", flag: "🇪🇨", visitors: 19100, percentage: 95.3 },
  { country: "United States", flag: "🇺🇸", visitors: 384, percentage: 1.9 },
  { country: "Argentina", flag: "🇦🇷", visitors: 347, percentage: 1.7 },
  { country: "Mexico", flag: "🇲🇽", visitors: 136, percentage: 0.7 },
  { country: "Chile", flag: "🇨🇱", visitors: 72, percentage: 0.4 }
];

export const topBrowsers = [
  { browser: "Chrome Mobile", views: 9451, percentage: 46.3 },
  { browser: "Facebook (in-app)", views: 3497, percentage: 17.1 },
  { browser: "Chrome", views: 1446, percentage: 7.1 },
  { browser: "Chrome Webview", views: 1295, percentage: 6.3 },
  { browser: "TikTok (in-app)", views: 1222, percentage: 6.0 },
  { browser: "Otros", views: 3466, percentage: 17.2 }
];

export const topReferrers = [
  { domain: "youtube.com", referrals: 4350, type: "Video Social", description: "Tráfico generado por enlaces en descripciones y contenido audiovisual." },
  { domain: "m.facebook.com", referrals: 2340, type: "Facebook Móvil", description: "Prospectos que hicieron clic en enlaces de posts, historias o perfiles." },
  { domain: "google.com", referrals: 1867, type: "Búsqueda Orgánica", description: "Usuarios que buscaron carreras o 'La Metro' en Google sin pagar." },
  { domain: "tiktok.com", referrals: 1199, type: "Video Corto", description: "Tráfico de enlaces en perfiles o posts de TikTok." },
  { domain: "atlas.taboolanews.com", referrals: 554, type: "Noticias / Recomendado", description: "Red de recomendaciones nativas de Taboola." }
];

export const searchEnginesBreakdown = [
  { name: "Google Búsqueda Orgánica (SEO)", referrals: 1466, percentage: "66.9%" },
  { name: "Google Ads (Pauta Pagada)", referrals: 635, percentage: "29.0%" },
  { name: "Bing", referrals: 46, percentage: "2.1%" },
  { name: "Otros (ChatGPT, Brave, DuckDuckGo)", referrals: 43, percentage: "2.0%" }
];

export const socialMediaBreakdown = [
  { name: "Facebook (m.facebook / fb.com)", referrals: 2744, percentage: "60.1%" },
  { name: "TikTok (tiktok.com)", referrals: 1199, percentage: "26.2%" },
  { name: "Instagram (l.instagram / ig.com)", referrals: 608, percentage: "13.3%" },
  { name: "Otras Menciones Sociales", referrals: 18, percentage: "0.4%" }
];

// ==========================================
// GOOGLE SEARCH CONSOLE (SEO)
// ==========================================
export const gscMetrics = [
  {
    id: "gsc_clicks",
    label: "Clics en Google (SEO)",
    value: "1,7 mil",
    exactValue: 1700,
    change: "-19%",
    changePeriod: "Últimos 28 días",
    isPositive: false,
    subtext: "Tráfico orgánico puro",
    sparkline: [80, 85, 70, 65, 60, 50, 48, 55, 60, 58, 52, 49, 56, 62, 60, 54, 50, 58, 65, 60, 55, 52, 58, 64, 68, 62, 58, 60],
    color: "rose",
    description: "Número total de clics desde los resultados orgánicos de Google."
  },
  {
    id: "gsc_impressions",
    label: "Impresiones en Google",
    value: "35,2 mil",
    exactValue: 35200,
    change: "-1%",
    changePeriod: "Últimos 28 días",
    isPositive: false,
    subtext: "Presencia en resultados",
    sparkline: [1200, 1250, 1180, 1100, 1050, 1000, 980, 1050, 1120, 1100, 1080, 1020, 1150, 1220, 1200, 1140, 1100, 1180, 1300, 1250, 1180, 1120, 1200, 1320, 1380, 1290, 1220, 1250],
    color: "rose",
    description: "Veces que la web de La Metro apareció como resultado para búsquedas en Google."
  },
  {
    id: "gsc_ctr",
    label: "CTR Medio",
    value: "4.8%",
    change: "Efectivo",
    changePeriod: "Ratio Clics/Impresiones",
    isPositive: true,
    subtext: "Casi 5 de cada 100 entran",
    sparkline: [4.5, 4.6, 4.8, 4.7, 4.9, 4.8, 4.7, 4.8, 4.9, 4.8, 4.7, 4.8, 4.8, 4.9, 4.8, 4.7, 4.8, 4.9, 4.8, 4.7, 4.8, 4.9, 4.8, 4.8, 4.9, 4.8, 4.7, 4.8],
    color: "green",
    description: "Porcentaje de impresiones que se convirtieron en clics directos."
  },
  {
    id: "gsc_position",
    label: "Posición Media",
    value: "7.4",
    change: "1ª Página",
    changePeriod: "Promedio en Google",
    isPositive: true,
    subtext: "Puesto 7-8 general",
    sparkline: [8.1, 7.9, 7.8, 7.6, 7.5, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.3, 7.4, 7.5, 7.4],
    color: "green",
    description: "Posición promedio en Google (valores entre 1 y 10 aseguran primera página)."
  },
  {
    id: "gsc_security",
    label: "Indexación HTTPS",
    value: "109 URLs",
    change: "100%",
    changePeriod: "0 errores críticos",
    isPositive: true,
    subtext: "Seguridad técnica óptima",
    sparkline: [109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109],
    color: "green",
    description: "URLs validadas e indexadas de forma segura con certificado HTTPS."
  },
  {
    id: "gsc_top_growth",
    label: "Página con Mayor Alza",
    value: "+307%",
    change: "Explosivo",
    changePeriod: "/carreras/",
    isPositive: true,
    subtext: "Exploración de catálogo",
    sparkline: [10, 12, 15, 18, 22, 28, 35, 42, 48, 55, 61],
    color: "green",
    description: "El directorio general de carreras experimentó el mayor crecimiento orgánico en Google."
  }
];

export const gscPagesPerformance = [
  { page: "Instituto Metropolitano de Diseño (Home)", path: "https://lametro.edu.ec/", clicks: 1050, trend: "-24% (Estacional)", category: "Institucional / Portada", diagnosis: "Punto principal de atracción por búsquedas de la marca." },
  { page: "Diseño de Modas", path: "https://lametro.edu.ec/carreras/diseno-modas/", clicks: 111, trend: "+1% (Estable)", category: "Carrera Académica", diagnosis: "Carrera líder en atracción por búsquedas específicas de moda/textil." },
  { page: "Carreras de Diseño", path: "https://lametro.edu.ec/carreras/", clicks: 61, trend: "+307% (Explosivo)", category: "Oferta Académica", diagnosis: "Aspirantes explorando activamente todo el catálogo de carreras." },
  { page: "Diseño Gráfico", path: "https://lametro.edu.ec/carreras/diseno-grafico/", clicks: 61, trend: "-14%", category: "Carrera Académica", diagnosis: "Alta demanda de interesados en comunicación visual." },
  { page: "Diseño de Interiores", path: "https://lametro.edu.ec/carreras/diseno-interiores/", clicks: 57, trend: "-27%", category: "Carrera Académica", diagnosis: "Interés continuo en arquitectura interior y espacios." },
  { page: "Otras URLs y Artículos de Blog", path: "https://lametro.edu.ec/blog/", clicks: 360, trend: "Estable", category: "General / Blog", diagnosis: "Tráfico distribuido en notas y artículos institucionales." }
];

export const gscVsWpComparison = [
  {
    channel: "Búsqueda Gratuita en Google (SEO Orgánico)",
    volume: "1.700 clics / 1.466 visitas",
    gsc: "SÍ (Es su único enfoque)",
    wp: "SÍ (Incluido en el total)",
    desc: "Usuarios que buscaron carreras o 'La Metro' en Google sin pagar."
  },
  {
    channel: "Videos y Enlaces de YouTube",
    volume: "4.350 visitas referidas",
    gsc: "NO",
    wp: "SÍ",
    desc: "Tráfico generado por enlaces en descripciones y contenido audiovisual."
  },
  {
    channel: "Redes Sociales (Facebook, TikTok, Instagram)",
    volume: "4.569 visitas referidas",
    gsc: "NO",
    wp: "SÍ",
    desc: "Prospectos que hicieron clic en enlaces de posts, historias o perfiles."
  },
  {
    channel: "Enlaces de WhatsApp y Correos (No Asignado)",
    volume: "3.053 visitas",
    gsc: "NO",
    wp: "SÍ",
    desc: "Aspirantes que reciben links por mensaje directo o chat de atención."
  },
  {
    channel: "Tráfico Directo (Marca)",
    volume: "1.615 visitas",
    gsc: "NO",
    wp: "SÍ",
    desc: "Usuarios que escriben directamente la URL o la guardan en favoritos."
  },
  {
    channel: "Google Ads (Anuncios Pagados)",
    volume: "635 visitas",
    gsc: "NO (GSC solo mide gratis)",
    wp: "SÍ",
    desc: "Clics en campañas pagadas de Google en periodo de admisiones."
  }
];

// ==========================================
// DATASET ANUAL CONSOLIDADO (2026)
// ==========================================
export const annualExecutiveMetrics = [
  {
    id: "annual_visitors",
    label: "Visitantes Totales (Año)",
    value: "74.181",
    exactValue: 74181,
    change: "Acumulado",
    changePeriod: "Ene - Dic 2026",
    isPositive: true,
    subtext: "Masa total de audiencia",
    sparkline: [5000, 5200, 6100, 6800, 7500, 9200, 19600, 20300, 15000, 12000, 9000, 7400],
    color: "green",
    description: "Total acumulado de usuarios únicos en 2026."
  },
  {
    id: "annual_views",
    label: "Páginas Vistas (Año)",
    value: "122.463",
    exactValue: 122463,
    change: "Acumulado",
    changePeriod: "Ene - Dic 2026",
    isPositive: true,
    subtext: "1.65 páginas por usuario",
    sparkline: [8000, 8500, 10000, 11500, 12500, 15000, 32000, 31000, 24000, 19000, 14000, 12200],
    color: "green",
    description: "Total acumulado de páginas vistas en 2026."
  },
  {
    id: "annual_referrals",
    label: "Tráfico Referido Anual",
    value: "48.183",
    exactValue: 48183,
    change: "64.9%",
    changePeriod: "del tráfico total",
    isPositive: true,
    subtext: "Fuentes externas",
    sparkline: [3000, 3200, 3800, 4200, 4800, 6000, 11200, 14300, 10000, 8000, 6000, 4800],
    color: "green",
    description: "Total de tráfico derivado desde otras fuentes en el año."
  },
  {
    id: "annual_bounce",
    label: "Tasa de Rebote Anual",
    value: "72.8%",
    change: "Promedio",
    changePeriod: "Histórico 2026",
    isPositive: false,
    subtext: "27.2% interacción profunda",
    sparkline: [71, 72, 73, 72, 73, 72, 72.9, 75.5, 73, 72, 73, 72.8],
    color: "rose",
    description: "Porcentaje de rebote histórico de la plataforma."
  },
  {
    id: "annual_ecuador",
    label: "Audiencia Ecuador",
    value: "60.238",
    exactValue: 60238,
    change: "95.1%",
    changePeriod: "del total anual",
    isPositive: true,
    subtext: "Mercado consolidado",
    sparkline: [4000, 4200, 4900, 5500, 6000, 7500, 18200, 19100, 12000, 9500, 7200, 6020],
    color: "green",
    description: "Número acumulado de visitantes procedentes de Ecuador."
  },
  {
    id: "annual_star_careers",
    label: "D. Industrial + Modas",
    value: "39.131",
    change: "36.0%",
    changePeriod: "de vistas globales",
    isPositive: true,
    subtext: "Motores ancla de La Metro",
    sparkline: [2500, 2700, 3200, 3600, 4000, 5000, 14600, 15300, 9800, 7800, 5900, 3910],
    color: "green",
    description: "Vistas combinadas de Diseño Industrial y Modas durante el año."
  }
];

export const annualSourceCategories = [
  { category: "Organic Search (Búsqueda Orgánica Google)", referrals: 13264, percentage: "22.0%", desc: "Personas que buscaron 'La Metro', carreras o diseño en Google y entraron sin pagar anuncio." },
  { category: "Organic Social (Redes Sociales Orgánicas)", referrals: 12447, percentage: "20.6%", desc: "Visitas generadas gratis desde publicaciones y enlaces en TikTok, YouTube, IG y Facebook." },
  { category: "Direct Traffic (Tráfico Directo)", referrals: 12188, percentage: "20.2%", desc: "Usuarios que escribieron la dirección web directamente o la tenían guardada en favoritos." },
  { category: "Organic Video (Plataformas de Video)", referrals: 10996, percentage: "18.2%", desc: "Tráfico proveniente de enlaces en descripciones de YouTube y videos institucionales." },
  { category: "Unassigned Traffic (Tráfico No Asignado)", referrals: 7784, percentage: "12.9%", desc: "Visitas desde enlaces en WhatsApp, apps de mensajería o correos sin etiqueta de rastreo." },
  { category: "Paid Search (Anuncios en Google Ads)", referrals: 2451, percentage: "4.1%", desc: "Prospectos captados mediante campañas de anuncios pagados en el buscador de Google." },
  { category: "Paid Social (Publicidad en Redes)", referrals: 1215, percentage: "2.0%", desc: "Visitas que llegaron haciendo clic en anuncios patrocinados de redes sociales." },
  { category: "Referral / Otros Sitios Web", referrals: 27, percentage: "0.0%", desc: "Menciones y enlaces en otros sitios web aliados y directorios." }
];

export const annualTopPages = [
  { page: "Diseño Industrial", views: 35237, percentage: "32.4%", desc: "Carrera con mayor interés acumulado en el año." },
  { page: "Instituto Metropolitano de Diseño (Home)", views: 26486, percentage: "24.4%", desc: "Portada institucional con alto volumen continuo." },
  { page: "Carreras (Directorio de Oferta)", views: 15337, percentage: "14.1%", desc: "Página de decisión donde los usuarios comparan carreras." },
  { page: "Contacto / Formulario", views: 7275, percentage: "6.7%", desc: "Canal de captación continua de prospectos." },
  { page: "Diseño de Modas", views: 3894, percentage: "3.6%", desc: "Segunda carrera con alta interacción y demanda constante." },
  { page: "Otras Páginas y Artículos Institucionales", views: 20479, percentage: "18.8%", desc: "Navegación general y blog institucional." }
];

export const contentAnalytics = {
  period: "Agosto 2026",
  publishedEntradas: 4,
  publishedEntradasChange: "+75.0%",
  visitors: 2410,
  visitorsChange: "-8.0%",
  views: 3210,
  viewsChange: "-0.6%",
  trend: [
    { week: "Semana 1", visitors: 580, views: 780 },
    { week: "Semana 2", visitors: 620, views: 820 },
    { week: "Semana 3", visitors: 650, views: 870 },
    { week: "Semana 4", visitors: 560, views: 740 }
  ]
};

// ==========================================
// CONCLUSIONES (PALETA MINIMALISTA: GRIS Y ROJO)
// ==========================================
export const conclusions = [
  {
    title: "Crecimiento global en visitantes (+4.0%)",
    description: "El tráfico web total superó los 20,300 visitantes en agosto, registrando un repunte notable que fue fuertemente impulsado por campañas visuales en YouTube y Facebook (+6.600 visitas referidas combinadas).",
    type: "neutral"
  },
  {
    title: "Liderazgo de Diseño Industrial (83.9% del interés en carreras)",
    description: "La carrera de Diseño Industrial continúa liderando el interés digital al alcanzar un récord de 10,932 visitantes únicos y 14,731 páginas vistas individuales en el mes.",
    type: "neutral"
  },
  {
    title: "Atención: Tasa de rebote elevada (75.5%)",
    description: "La tasa de rebote subió +2.6% respecto a julio. Se colocarán llamados a la acción (CTA) más visibles en las páginas de carreras para captar las visitas móviles que leen y salen rápido. Se continúa mejorando la optimización de imágenes a pesar de que el 95% aprox. de imágenes se encuentran correctamente optimizadas de acuerdo al reglamente de SEO en Google",
    type: "neutral"
  },
  {
    title: "Dominio móvil extremo (82.6% Smartphones)",
    description: "El 82.6% de los aspirantes navega desde dispositivos móviles (Android representa el 79.3%). Toda la experiencia y velocidad de carga deben estar rigurosamente optimizadas para celulares.",
    type: "neutral"
  },
  {
    title: "Aparición de nuevas fuentes de IA (ChatGPT, Brave, Perplexity)",
    description: "Por primera vez se registran visitas directas referidas desde modelos de Inteligencia Artificial como ChatGPT y motores de búsqueda generativa, marcando la importancia de la optimización para motores de respuestas (AIO).",
    type: "neutral"
  }
];

export const seoConclusions = [
  {
    title: "Catálogo general en alza (+307% en /carreras/)",
    description: "Las búsquedas orgánicas en Google hacia el directorio de carreras crecieron drásticamente, demostrando que los aspirantes están explorando y comparando activamente las opciones de estudio.",
    type: "neutral"
  },
  {
    title: "Diseño de Modas como líder SEO orgánico",
    description: "Diseño de Modas captó 111 clics orgánicos directos en Google, liderando las búsquedas no marcadas de carreras específicas y demostrando un posicionamiento fuerte en el nicho textil.",
    type: "neutral"
  },
  {
    title: "Salud técnica impecable (109 URLs HTTPS)",
    description: "109 URLs seguras e indexadas bajo HTTPS con 0 errores críticos de rastreo, garantizando a Google máxima confiabilidad y seguridad.",
    type: "neutral"
  },
  {
    title: "Atención: Descenso en clics de marca (-24% en Home)",
    description: "Las búsquedas de marca hacia la portada disminuyeron un 24%, un comportamiento estacional normal al finalizar el período intensivo de matrículas tempranas.",
    type: "alert"
  }
];

// ==========================================
// GLOSARIO Y FAQS
// ==========================================
export const glossaryData = [
  {
    question: "¿Por qué GSC reporta 1.7K clics y WordPress ~20K visitantes?",
    answer: "Google Search Console (GSC) mide ÚNICAMENTE las búsquedas gratuitas e impresiones en el buscador de Google (una sola vía de entrada). Por su parte, WordPress (WP Statistics) mide el tráfico total global del sitio, sumando las visitas que llegan desde redes sociales (YouTube, Facebook, TikTok), enlaces de WhatsApp directos, correos electrónicos y tráfico directo.",
    example: "Los 1.700 clics reportados en GSC forman parte de los 20.377 visitantes totales de WordPress, sumados a las 4.3K visitas desde YouTube y 2.7K desde Facebook.",
    utility: "Explica con claridad que ambas herramientas no se contradicen, sino que se complementan para dar una visión total."
  },
  {
    question: "¿Qué es Google Search Console (GSC)?",
    answer: "Es la herramienta oficial de Google que analiza de forma exclusiva cómo interactúan los usuarios con tu sitio web en los resultados de búsqueda gratuitos de Google.",
    example: "Muestra cuántos usuarios escribieron 'carreras de diseño en Quito' en Google y terminaron haciendo clic en la web de La Metro.",
    utility: "Ayuda a entender el rendimiento del posicionamiento web (SEO) y a identificar qué contenidos busca tu público."
  },
  {
    question: "¿Qué es WP Statistics?",
    answer: "Es una herramienta de analítica instalada internamente en el servidor de tu sitio web (WordPress) para registrar de forma global todas las páginas que se visualizan y de dónde proviene cada usuario.",
    example: "Registra que un usuario accedió desde Quito mediante un celular Android haciendo clic en un enlace de Facebook.",
    utility: "Permite conocer el alcance total de la web, midiendo de manera directa y en tiempo real el tráfico de redes sociales y WhatsApp."
  },
  {
    question: "Clics vs. Impresiones (en Google Search Console)",
    answer: "Una impresión ocurre cada vez que un enlace de tu sitio web aparece ante un usuario en los resultados de búsqueda de Google. Un clic ocurre únicamente cuando la persona presiona ese enlace y entra a tu web.",
    example: "Si la web de La Metro apareció 35.200 veces en búsquedas de Google (impresiones) y de esas veces los usuarios pulsaron el enlace 1.700 veces (clics).",
    utility: "Sirve para evaluar si la marca tiene buena visibilidad y si los títulos en Google son llamativos."
  },
  {
    question: "CTR (Click-Through Rate - Tasa de Clics)",
    answer: "Es la proporción de usuarios que hicieron clic en tu web después de verla. Se calcula dividiendo los Clics entre las Impresiones.",
    example: "Un CTR del 4,8% significa que por cada 100 veces que la web de La Metro apareció en Google, casi 5 personas hicieron clic en ella.",
    utility: "Es el principal indicador de la efectividad y atractivo que tienen tus páginas en el buscador."
  },
  {
    question: "Posición Media en Google",
    answer: "Es el número promedio que ocupa tu sitio web en los resultados de Google cuando los usuarios realizan una búsqueda.",
    example: "Una posición media de 7.4 significa que, en promedio, La Metro aparece entre el puesto 7 y 8 de la primera página de Google.",
    utility: "Aparecer entre los puestos 1 y 10 (primera página) es vital para captar la mayor cantidad de clics orgánicos."
  },
  {
    question: "Referral (Tráfico de Referidos / Enlaces)",
    answer: "Representa a los usuarios que llegaron al sitio web a través de un enlace directo colocado en otra página web externa o aplicación de terceros.",
    example: "Un aspirante hace clic en el enlace del perfil en la biografía de TikTok de La Metro y es redirigido a la web.",
    utility: "Identifica qué canales externos, redes sociales o aliados digitales están enviando público real a tu sitio web."
  },
  {
    question: "Bounce Rate (Tasa de Rebote)",
    answer: "Mide el porcentaje de visitas que entran al sitio web y se retiran habiendo visualizado únicamente una sola página, sin interactuar ni ir a otra sección.",
    example: "Un aspirante entra directamente a la página de Contacto, copia el número telefónico de WhatsApp de admisión y cierra el navegador.",
    utility: "Un rebote alto no siempre es malo: en páginas de conversión (como contacto), indica que el usuario obtuvo su respuesta de inmediato."
  },
  {
    question: "Organic Social (Redes Orgánicas) vs Paid Social (Redes Pagadas)",
    answer: "El tráfico orgánico proviene de enlaces compartidos en publicaciones normales y gratuitas en redes sociales. El tráfico pagado proviene de enlaces en anuncios patrocinados (campañas de pago).",
    example: "Un video de TikTok que se vuelve viral y atrae visitas (Orgánico) vs un anuncio de inscripciones en Facebook Ads (Pagado).",
    utility: "Sirve para analizar la rentabilidad de las campañas publicitarias frente al contenido creativo propio."
  },
  {
    question: "In-App Browser (Navegador Integrado en Aplicaciones)",
    answer: "Es el navegador simplificado que abren aplicaciones como Instagram, Facebook o TikTok de manera interna para mostrar un sitio web sin obligar al usuario a salir de su app.",
    example: "Tocas un enlace en Instagram y la página web se carga en una ventana interna sin abrir Safari o Google Chrome.",
    utility: "Representa gran parte del tráfico móvil; exige que el sitio cargue en menos de 2 segundos para evitar que el usuario desista."
  }
];
