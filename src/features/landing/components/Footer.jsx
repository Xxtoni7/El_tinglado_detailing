import logo from "../../../assets/images/Logo.png";
import { business } from "../data/business.js";
import Container from "../../../shared/ui/Container.jsx";
import { WhatsAppIcon } from "./Hero.jsx";

function Footer() {
  return (
    <footer className="border-t border-lime/15 bg-navy pt-12 pb-6">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/[.06] pb-8 max-md:flex-col max-md:text-center">
          <div className="flex items-center gap-2 font-heading text-[1.3rem] font-extrabold text-white">
            <img
              alt="El tinglado Detailing"
              className="size-7 rounded-md"
              height="100"
              src={logo}
              width="100"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              className="text-[.85rem] text-white/50 transition hover:text-lime"
              href="#inicio"
            >
              Inicio
            </a>
            <a
              className="text-[.85rem] text-white/50 transition hover:text-lime"
              href="#taller"
            >
              Taller
            </a>
            <a
              className="text-[.85rem] text-white/50 transition hover:text-lime"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="text-[.85rem] text-white/50 transition hover:text-lime"
              href="#resenas"
            >
              Reseñas
            </a>
            <a
              className="text-[.85rem] text-white/50 transition hover:text-lime"
              href="#consulta"
            >
              Consulta
            </a>
          </div>
          <div className="flex gap-3">
            <a
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-white/[.06] text-white/50 transition hover:bg-lime hover:text-navy"
              href={business.instagramUrl}
              id="footer-instagram"
            >
              <svg
                className="size-5"
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
            </a>
            <a
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full bg-white/[.06] text-white/50 transition hover:bg-lime hover:text-navy"
              href={business.facebookUrl}
              id="footer-facebook"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12.07h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
            </a>
            <a
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-white/[.06] text-white/50 transition hover:bg-lime hover:text-navy"
              href={`https://wa.me/${business.whatsappNumber}?text=Hola!%20Vengo%20desde%20la%20web%20y%20quiero%20consultar%20por%20los%20servicios.`}
              id="footer-whatsapp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>
        <div className="pt-6 text-center text-[.8rem] text-white/30">
          © 2024 El tinglado Detailing — General Pacheco, Buenos Aires. Todos
          los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
