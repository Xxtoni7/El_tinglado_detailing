import { business } from "../data/business.js";
import { useReveal } from "../hooks/useReveal.js";
import Container from "../../../shared/ui/Container.jsx";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon } from "../../../shared/ui/icons.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";
import ContactForm from "./ContactForm.jsx";
import LocationMapCard from "./LocationMapCard.jsx";

function ContactSection({ selectedService }) {
  const { ref: headingRef, isVisible: isHeadingVisible } = useReveal();
  const { ref: formRef, isVisible: isFormVisible } = useReveal();
  const { ref: infoRef, isVisible: isInfoVisible } = useReveal();

  return (
    <section className="bg-warm py-[clamp(4rem,8vw,7rem)]" id="consulta">
      <Container>
        <div
          className={`reveal ${isHeadingVisible ? "reveal-visible" : ""}`}
          ref={headingRef}
        >
          <SectionHeading
            description="Completá el formulario y te contactamos por WhatsApp con toda la información que necesitás."
            eyebrow="Consulta"
            eyebrowId="consulta-eyebrow"
            title="Contanos sobre tu vehículo"
          />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-12 max-md:grid-cols-1">
          <div
            className={`reveal ${isFormVisible ? "reveal-visible" : ""}`}
            ref={formRef}
          >
            <ContactForm selectedService={selectedService} />
          </div>
          <div
            className={`reveal flex flex-col gap-6 ${
              isInfoVisible ? "reveal-visible" : ""
            }`}
            ref={infoRef}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="rounded-[20px] bg-navy p-8 text-white">
              <h4 className="mb-4 font-heading text-[1.1rem] font-bold">
                ¿Como llego?
              </h4>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <PinIcon className="mt-0.5 size-5 shrink-0 text-lime" />
                <div>
                  <strong className="block text-white">Dirección</strong>
                  {business.address}
                  <br />
                  {business.location}
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <ClockIcon className="mt-0.5 size-5 shrink-0 text-lime" />
                <div>
                  <strong className="block text-white">Horarios</strong>
                  {business.hours}
                </div>
              </div>
              <div className="mb-4 flex items-start gap-3 text-[.9rem] text-white/70">
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-lime" />
                <div>
                  <strong className="block text-white">Teléfono</strong>
                  {business.phoneDisplay}
                </div>
              </div>
              <a
                className="group flex items-start gap-3 text-[.9rem] text-white/70 transition hover:text-lime"
                href={business.instagramUrl}
                id="contact-instagram-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className="mt-0.5 size-5 shrink-0 text-lime" />
                <div>
                  <strong className="block text-white">Instagram</strong>
                  <span className="underline decoration-white/25 underline-offset-4">
                    El Tinglado Detailing
                  </span>
                </div>
              </a>
            </div>
            <LocationMapCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
