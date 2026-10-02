import logo from "../../../../assets/images/Logo.PNG";
import { business } from "../../data/business.js";
import { navigateToSection } from "../../lib/sectionNavigation.js";
import { buildGeneralWhatsAppUrl } from "../../lib/whatsapp.js";
import Container from "../../../../shared/ui/Container.jsx";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon } from "../../../../shared/ui/icons.jsx";

const footerNavigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#taller", label: "Taller" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#consulta", label: "Consulta" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsAppUrl = buildGeneralWhatsAppUrl();

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
                <PhoneIcon
                  className="mt-0.5 size-5 shrink-0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>{business.phoneDisplay}</span>
              </a>
              <a
                className="flex items-start gap-3 text-white/60 transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href={business.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PinIcon className="mt-0.5 size-5 shrink-0" />
                <span>{business.address}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <ClockIcon
                  className="mt-0.5 size-5 shrink-0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>{business.hours}</span>
              </div>
              <a
                className="flex items-start gap-3 text-white/60 transition hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
                href={business.instagramUrl}
                id="footer-instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className="mt-0.5 size-5 shrink-0" />
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
