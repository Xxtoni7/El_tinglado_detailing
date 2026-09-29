const bmwPrimaryImage = new URL(
  "../../../assets/images/Trabajos/bmw1.webp",
  import.meta.url,
).href;
const bmwDetailImage = new URL(
  "../../../assets/images/Trabajos/bmw3.webp",
  import.meta.url,
).href;
const amarokImage = new URL(
  "../../../assets/images/Trabajos/amarok1.webp",
  import.meta.url,
).href;
const gtiImage = new URL(
  "../../../assets/images/Trabajos/gti2.webp",
  import.meta.url,
).href;
const broncoImage = new URL(
  "../../../assets/images/Trabajos/bronco3.webp",
  import.meta.url,
).href;
const motorcycleImage = new URL(
  "../../../assets/images/serviceImg/moto.webp",
  import.meta.url,
).href;
const wheelBeforeImage = new URL(
  "../../../assets/images/Trabajos/ruedaAntes.webp",
  import.meta.url,
).href;
const wheelAfterImage = new URL(
  "../../../assets/images/Trabajos/ruedaDespues.webp",
  import.meta.url,
).href;

export const featuredProject = {
  id: "bmw",
  vehicle: "BMW",
  service: "Tratamiento cerámico",
  description:
    "Tratamiento cerámico para potenciar el brillo, los reflejos y la protección de la pintura.",
  primaryImage: bmwPrimaryImage,
  detailImage: bmwDetailImage,
  primaryAlt:
    "BMW azul con tratamiento cerámico bajo la iluminación del taller",
  detailAlt: "Detalle del acabado cerámico aplicado sobre un BMW azul",
};

export const galleryProjects = [
  {
    id: "amarok",
    vehicle: "Volkswagen Amarok",
    service: "Corrección de laca y sellado cerámico",
    image: amarokImage,
    alt: "Volkswagen Amarok con corrección de laca y sellado cerámico",
  },
  {
    id: "gti",
    vehicle: "Volkswagen Golf GTI",
    service: "Lijado para corregir y pulido en tres pasos",
    image: gtiImage,
    alt: "Volkswagen Golf GTI luego de un pulido en tres pasos",
  },
  {
    id: "bronco",
    vehicle: "Ford Bronco",
    service: "Tratamiento cerámico y sellados de vidrios, llantas y plásticos",
    image: broncoImage,
    alt: "Ford Bronco con tratamiento cerámico y sellados de exteriores",
  },
];

export const motorcycleProject = {
  id: "motorcycle",
  vehicle: "Moto",
  service: "Lavado detallado y tratamiento cerámico",
  image: motorcycleImage,
  alt: "Moto luego de un lavado detallado y tratamiento cerámico",
};

export const wheelProject = {
  id: "wheel",
  vehicle: "Renovación de llantas",
  service: "Recuperación estética para devolver presencia a las llantas",
  beforeImage: wheelBeforeImage,
  afterImage: wheelAfterImage,
  beforeAlt: "Llanta antes de su renovación estética",
  afterAlt: "Llanta después de su renovación estética",
};
