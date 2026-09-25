import { business } from "../data/business.js";
import { WhatsAppIcon } from "./Hero.jsx";

function FloatingWhatsapp() {
  return (
    <div
      className="whatsapp-float fixed right-8 bottom-8 z-[999] flex flex-col items-end gap-3 max-sm:right-5 max-sm:bottom-5"
      id="whatsappFloat"
    >
      <span className="rounded-xl bg-white px-5 py-3 text-[.85rem] font-semibold whitespace-nowrap text-navy opacity-0 shadow-[0_8px_32px_rgba(0,0,0,.2)] translate-y-2 transition group-hover:translate-y-0 group-hover:opacity-100">
        ¿Tenés alguna consulta?
      </span>
      <a
        aria-label="Contactar por WhatsApp"
        className="whatsapp-float-btn flex size-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,.4)] transition hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,.5)] max-sm:size-[52px]"
        href={`https://wa.me/${business.whatsappNumber}?text=Hola!%20Quiero%20consultar%20por%20los%20servicios%20de%20detailing`}
        id="floating-whatsapp-btn"
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-[30px] max-sm:size-[26px]" />
      </a>
    </div>
  );
}

export default FloatingWhatsapp;
