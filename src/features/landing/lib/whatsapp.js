import { business } from "../data/business.js";

const defaultInquiryMessage =
  "Hola! Vengo desde la web y quiero consultar por los servicios.";

export function buildGeneralWhatsAppUrl() {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(defaultInquiryMessage)}`;
}

export function buildWhatsAppUrl({
  name,
  brand,
  model,
  year,
  service,
  comment,
}) {
  const lines = [
    "¡Hola! Quiero consultar por un servicio de detailing.",
    "",
    `*Nombre:* ${name}`,
    `*Vehículo:* ${brand} ${model} ${year}`,
    `*Servicio:* ${service}`,
    ...(comment ? [`*Comentario:* ${comment}`] : []),
    "",
    "¡Quedo a la espera de su respuesta!",
  ];
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
