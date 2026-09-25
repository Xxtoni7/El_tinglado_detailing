const ceramicImage = new URL('../../../assets/images/ceramic.jpg', import.meta.url).href
const paintCorrectionImage = new URL('../../../assets/images/paint-correction.jpg', import.meta.url).href
const interiorImage = new URL('../../../assets/images/interior.jpg', import.meta.url).href
const ppfImage = new URL('../../../assets/images/ppf.jpg', import.meta.url).href
const washImage = new URL('../../../assets/images/wash.jpg', import.meta.url).href

export const services = [
  {
    name: 'Tratamiento Cerámico',
    description: 'Protección duradera con nanotecnología cerámica. Brillo intenso, hidrofobicidad superior y defensa contra rayos UV, lluvia ácida y contaminantes.',
    image: ceramicImage,
    alt: 'Tratamiento cerámico automotriz',
    tags: ['Hasta 3 años', 'Hidrofóbico', 'Anti-UV'],
  },
  {
    name: 'Corrección de Pintura',
    description: 'Eliminamos rayones, hologramas y swirl marks con pulido profesional multietapa. Devolvemos el brillo original a la pintura de tu vehículo.',
    image: paintCorrectionImage,
    alt: 'Corrección y pulido de pintura',
    tags: ['Pulido multietapa', 'Anti-swirl'],
  },
  {
    name: 'Interior Detailing',
    description: 'Limpieza profunda con vapor, acondicionamiento de cueros, limpieza de tapizados y desinfección completa. Tu auto por dentro como nuevo.',
    image: interiorImage,
    alt: 'Detallado interior del vehículo',
    tags: ['Vapor profesional', 'Hidratación de cueros'],
  },
  {
    name: 'Film de Protección (PPF)',
    description: 'Film transparente autorreparable que protege tu pintura contra piedrazos, rayones y daños viales. Protección invisible de nivel superior.',
    image: ppfImage,
    alt: 'Instalación de film de protección PPF',
    tags: ['Autorreparable', 'Invisible', 'Anti-piedrazos'],
  },
  {
    name: 'Lavado Premium',
    description: 'Lavado exterior completo con técnica de dos baldes, snow foam, descontaminación y sellado rápido. Cuidado profesional sin marcas.',
    image: washImage,
    alt: 'Lavado premium y detallado exterior',
    tags: ['Snow foam', 'Descontaminación'],
  },
]
