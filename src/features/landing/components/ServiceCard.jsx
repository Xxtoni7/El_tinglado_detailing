import { useReveal } from "../hooks/useReveal.js";
import ServiceCardSummary from "./ServiceCardSummary.jsx";

function ServiceCard({ service, onConsult, revealDelay }) {
  const { ref, isVisible } = useReveal();

  return (
    <article
      className={`reveal group flex flex-col overflow-hidden rounded-[20px] border border-white/6 bg-navy-light transition hover:-translate-y-1.5 hover:border-lime/20 ${
        isVisible ? "reveal-visible" : ""
      }`}
      ref={ref}
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      <div className="relative h-55 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-navy-light after:to-transparent after:to-60%">
        <img
          alt={service.alt}
          className="size-full object-cover transition duration-600 group-hover:scale-[1.08]"
          height="400"
          loading="lazy"
          src={service.image}
          style={{ objectPosition: service.imagePosition?.desktop }}
          width="600"
        />
      </div>
      <ServiceCardSummary
        onConsult={onConsult}
        service={service}
        variant="desktop"
      />
    </article>
  );
}

export default ServiceCard;
