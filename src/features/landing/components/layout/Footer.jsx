import logo from "../../../../assets/images/Logo.PNG";
import { business } from "../../data/business.js";
import { navigateToSection } from "../../lib/sectionNavigation.js";
import Container from "../../../../shared/ui/Container.jsx";

const footerNavigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#taller", label: "Taller" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#consulta", label: "Consulta" },
];

function InstagramIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
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
      className="mt-0.5 size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsAppUrl = `https://wa.me/${business.whatsappNumber}?text=Hola!%20Vengo%20desde%20la%20web%20y%20quiero%20consultar%20por%20los%20servicios.`;

  function navigateFromFooter(event, href) {
    const sectionId = href.slice(1);

    navigateToSection({
      activeSectionId: sectionId,
      event,
      href,
      targetId: sectionId,
    });
  }

  return (
    <footer className="border-t border-lime/15 bg-navy pt-14 pb-7">
      <Container>
        <div className="grid gap-10 border-b border-white/6 pb-10 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[1.25fr_.7fr_1fr] lg:gap-20">
          <div className="max-md:text-center md:col-span-2 lg:col-span-1">
            <a
              className="inline-flex items-center gap-3 font-heading text-[1.35rem] font-extrabold text-white transition hover:text-lime focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime"
              href="#inicio"
              onClick={(event) => navigateFromFooter(event, "#inicio")}
            >
              <img
                alt="El Tinglado Detailing"
                className="size-14 rounded-full object-contain"
                height="100"
                src={logo}
                width="100"
              />
              <span>El Tinglado Detailing</span>
            </a>
            <p className="mt-4 max-w-90 text-[.9rem] leading-6 text-white/60 max-md:mx-auto">
              Detailing y protección automotriz en General Pacheco.
            </p>
            <nav
              aria-label="Información legal"
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[.8rem] text-white/45 max-md:justify-center"
            >
              <a
                className="underline decoration-white/20 underline-offset-4 transition hover:text-lime focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href="#politica-de-privacidad"
              >
                Política de Privacidad
              </a>
              <a
                className="underline decoration-white/20 underline-offset-4 transition hover:text-lime focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href="#terminos-y-condiciones"
              >
                Términos y Condiciones
              </a>
            </nav>
          </div>

          <nav
            aria-label="Enlaces rápidos"
            className="max-md:mx-auto max-md:w-full max-md:max-w-90"
          >
            <h2 className="font-heading text-base font-bold text-lime">
              Enlaces rápidos
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map(({ href, label }) => (
                <li key={href}>
                  <a
                    className="inline-flex py-0.5 text-[.9rem] text-white/60 transition hover:translate-x-1 hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                    href={href}
                    onClick={(event) => navigateFromFooter(event, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-md:mx-auto max-md:w-full max-md:max-w-90">
            <h2 className="font-heading text-base font-bold text-lime">
              Contacto
            </h2>
            <div className="mt-4 space-y-4 text-[.9rem] leading-6">
              <a
                className="flex items-start gap-3 text-white/60 transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href={whatsAppUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PhoneIcon />
                <span>{business.phoneDisplay}</span>
              </a>
              <a
                className="flex items-start gap-3 text-white/60 transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href={business.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PinIcon />
                <span>{business.address}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <ClockIcon />
                <span>{business.hours}</span>
              </div>
              <a
                className="flex items-start gap-3 text-white/60 transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href={business.instagramUrl}
                id="footer-instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon />
                <span>ElTingladoDetailing</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-6 text-center text-[.8rem] text-white/40">
          <p>
            © {currentYear} {business.tradeName}. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              aria-label="LinkedIn del desarrollador"
              className="font-semibold text-lime transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
              href={business.developerLinkedinUrl || undefined}
              rel="noopener noreferrer"
              target={business.developerLinkedinUrl ? "_blank" : undefined}
            >
              AR
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
