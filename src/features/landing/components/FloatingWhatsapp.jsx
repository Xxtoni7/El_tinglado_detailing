import { useEffect, useState } from "react";
import { business } from "../data/business.js";
import { WhatsAppIcon } from "./Hero.jsx";

function FloatingWhatsapp() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    });

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`whatsapp-float fixed right-8 bottom-8 z-999 flex flex-col items-end gap-3 transition-opacity max-sm:right-5 max-sm:bottom-5 ${
        isFooterVisible ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      id="whatsappFloat"
    >
      <span className="rounded-xl bg-white px-5 py-3 text-[.85rem] font-semibold whitespace-nowrap text-navy opacity-0 shadow-[0_8px_32px_rgba(0,0,0,.2)] translate-y-2 transition group-hover:translate-y-0 group-hover:opacity-100">
        ¿Tenés alguna consulta?
      </span>
      <a
        aria-label="Contactar por WhatsApp"
        className="whatsapp-float-btn flex size-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,.4)] transition hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,.5)] max-sm:size-13"
        href={`https://wa.me/${business.whatsappNumber}?text=Hola!%20Vengo%20desde%20la%20web%20y%20quiero%20consultar%20por%20los%20servicios.`}
        id="floating-whatsapp-btn"
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-7.5 max-sm:size-6.5" />
      </a>
    </div>
  );
}

export default FloatingWhatsapp;
