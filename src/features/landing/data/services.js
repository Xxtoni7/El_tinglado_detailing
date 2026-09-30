const ceramicImage = new URL('../../../assets/images/serviceImg/ceramico.webp', import.meta.url).href
const paintCorrectionImage = new URL('../../../assets/images/serviceImg/acrilico.jpeg', import.meta.url).href
const microPinturaImage = new URL('../../../assets/images/serviceImg/micro.webp', import.meta.url).href
const polarizadoimage = new URL('../../../assets/images/serviceImg/polarizado.webp', import.meta.url).href
const paraVenta = new URL('../../../assets/images/serviceImg/venta.webp', import.meta.url).href
const motor = new URL('../../../assets/images/serviceImg/motor.webp', import.meta.url).href
const optica = new URL('../../../assets/images/serviceImg/optica.webp', import.meta.url).href
const interior = new URL('../../../assets/images/serviceImg/interior.webp', import.meta.url).href
const llanta = new URL('../../../assets/images/serviceImg/llanta.webp', import.meta.url).href
const moto = new URL('../../../assets/images/serviceImg/moto2.webp', import.meta.url).href
const ppf = new URL('../../../assets/images/serviceImg/ppf.webp', import.meta.url).href


export const serviceCategories = [
  {
    id: 'proteccion-exterior',
    name: 'Protección y estética exterior',
    description:
      'Tratamientos pensados para preservar la pintura y realzar la presencia de tu vehículo.',
    alt: 'Protección exterior para vehículo',
  },
  {
    id: 'correccion-renovacion',
    name: 'Corrección y renovación',
    description:
      'Soluciones puntuales para recuperar detalles y mejorar la terminación estética.',
    alt: 'Corrección y renovación estética de vehículo',
  },
  {
    id: 'limpieza-preparacion',
    name: 'Limpieza y puesta a punto',
    description:
      'Cuidado profundo para el interior, el exterior y cada detalle que necesitás renovar.',
    alt: 'Limpieza y puesta a punto de vehículo',
  },
]

export const services = [
  {
    category: 'proteccion-exterior',
    name: 'Tratamiento Cerámico',
    description:
      'Protección de alto rendimiento para la pintura, con brillo profundo, efecto hidrofóbico y una barrera frente a contaminantes del uso diario.',
    image: ceramicImage,
    imagePosition: { desktop: '50% 60%', mobile: '50% 56%' },
    alt: 'Tratamiento cerámico automotriz',
    tags: ['Brillo profundo', 'Hidrofóbico'],
  },
  {
    category: 'proteccion-exterior',
    name: 'Tratamiento Acrílico',
    description:
      'Protección y realce de la pintura para recuperar brillo, mejorar la terminación y facilitar el mantenimiento exterior del vehículo.',
    image: paintCorrectionImage,
    imagePosition: { desktop: '50% 44%', mobile: '50% 45%' },
    alt: 'Tratamiento acrílico para vehículo',
    tags: ['Mayor brillo', 'Protección exterior'],
  },
  {
    category: 'correccion-renovacion',
    name: 'Micro Pintura',
    description:
      'Correcciones puntuales para mejorar pequeños detalles de pintura y devolver una apariencia más prolija a las zonas afectadas.',
    image: microPinturaImage,
    imagePosition: { desktop: '50% 45%', mobile: '50% 42%' },
    alt: 'Micro pintura automotriz',
    tags: ['Correcciones puntuales', 'Mejor terminación'],
  },
  {
    category: 'limpieza-preparacion',
    name: 'Preparado para la Venta',
    description:
      'Puesta a punto estética interior y exterior para que tu vehículo luzca limpio, cuidado y listo para mostrar.',
    image: paraVenta,
    imagePosition: { desktop: '50% 45%', mobile: '50% 46%' },
    alt: 'Preparado de vehículo para la venta',
    tags: ['Limpieza integral', 'Mejor presentación'],
  },
  {
    category: 'limpieza-preparacion',
    name: 'Lavado de Motor a Vapor',
    description:
      'Limpieza detallada del motor mediante vapor, pensada para remover suciedad acumulada y mejorar su presentación.',
    image: motor,
    imagePosition: { desktop: '50% 31%', mobile: '50% 36%' },
    alt: 'Lavado de motor a vapor',
    tags: ['Limpieza detallada', 'Lavado Motor'],
  },
  {
    category: 'correccion-renovacion',
    name: 'Pulido de Ópticas',
    description:
      'Restauración estética de ópticas opacas o deterioradas para mejorar su transparencia y renovar la apariencia frontal del vehículo.',
    image: optica,
    alt: 'Pulido de ópticas automotrices',
    tags: ['Mayor transparencia', 'Restauración'],
  },
  {
    category: 'limpieza-preparacion',
    name: 'Limpieza de interior con desinfección por ozono',
    description:
      'Limpieza profunda del habitáculo con desinfección por ozono para renovar tapizados, superficies y el ambiente interior.',
    image: interior,
    imagePosition: { desktop: '50% 46%', mobile: '50% 49%' },
    alt: 'Limpieza de interior con desinfección por ozono',
    tags: ['Ambiente mas saludable', 'Interior renovado'],
  },
  {
    category: 'correccion-renovacion',
    name: 'Pintura de Llantas',
    description:
      'Renovación estética de llantas para recuperar su presencia y acompañar el acabado general del vehículo.',
    image: llanta,
    alt: 'Pintura de llantas automotrices',
    tags: ['Renovación estética', 'Mejor terminación'],
  },
  {
    category: 'proteccion-exterior',
    name: 'Polarizados',
    description:
      'Colocación de polarizado para mejorar privacidad, confort y estética, con una terminación prolija y profesional.',
    image: polarizadoimage,
    imagePosition: { desktop: '50% 38%', mobile: '50% 41%' },
    alt: 'Colocación de polarizado automotriz',
    tags: ['Mayor privacidad', 'Confort'],
  },
  {
    category: 'proteccion-exterior',
    name: 'Colocación de PPF',
    description:
      'Instalación de film de protección para resguardar zonas expuestas de la pintura frente al desgaste cotidiano.',
    image: ppf,
    imagePosition: { desktop: '40% 30%', mobile: '50% 30%' },
    alt: 'Colocación de film de protección PPF',
    tags: ['Protección de pintura', 'Film transparente'],
  },
  {
    category: 'limpieza-preparacion',
    name: 'Lavado y Detallado de Motos',
    description:
      'Limpieza y detallado profesional para motos, con atención a cada superficie para recuperar brillo y buena presencia.',
    image: moto,
    imagePosition: { desktop: '50% 48%', mobile: '50% 50%' },
    alt: 'Lavado y detallado de motos',
    tags: ['Limpieza detallada', 'Brillo renovado'],
  },
];

export function getServicesByCategory(categoryId) {
  return services.filter((service) => service.category === categoryId);
}
