import { business } from "../data/business.js";
import Container from "../../../shared/ui/Container.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";
import ContactForm from "./ContactForm.jsx";

function PinIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-lime"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-lime"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-lime"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ContactSection({ selectedService }) {
  return (
    <section className="bg-warm py-[clamp(4rem,8vw,7rem)]" id="consulta">
      <Container>
        <SectionHeading
          description="Completá el formulario y te contactamos por WhatsApp con toda la información que necesitás."
          eyebrow="Consulta"
          title="Contanos sobre tu vehículo"
        />
        <div className="mt-12 grid grid-cols-2 gap-12 max-md:grid-cols-1">
          <ContactForm selectedService={selectedService} />
          <div className="flex flex-col gap-6">
            <div className="rounded-[20px] bg-navy p-8 text-white">
              <h4 className="mb-4 font-heading text-[1.1rem] font-bold">
                ¿Como llego?
              </h4>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <PinIcon />
                <div>
                  <strong className="block text-white">Dirección</strong>
                  {business.address}
                  <br />
                  {business.location}
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <ClockIcon />
                <div>
                  <strong className="block text-white">Horarios</strong>
                  {business.hours}
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <PhoneIcon />
                <div>
                  <strong className="block text-white">Teléfono</strong>
                  {business.phoneDisplay}
                </div>
              </div>
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-[.7rem] text-[.85rem] font-semibold text-navy transition hover:scale-[1.03]"
                href={business.googleMapsUrl}
                id="contact-map-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PinIcon />
                Cómo llegar
              </a>
            </div>
            <div className="h-[250px] overflow-hidden rounded-[20px] border-2 border-navy-light">
              <iframe
                allowFullScreen
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={business.mapEmbedUrl}
                title="Ubicación del taller en General Pacheco"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
