import { useReveal } from "../hooks/useReveal.js";

function BeforeAfterPair({ project, revealDelay = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <article
      className={`reveal ${isVisible ? "reveal-visible" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      <div className="mb-4">
        <h3 className="font-heading text-xl font-bold text-navy max-md:text-lg">
          {project.vehicle}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#6E6A64] max-md:text-xs">
          {project.service}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-[359px]:grid-cols-1 max-md:gap-3">
        <figure className="relative aspect-square overflow-hidden rounded-2xl bg-navy">
          <img
            alt={project.beforeAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            src={project.beforeImage}
          />
          <figcaption className="absolute top-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-white">
            Antes
          </figcaption>
        </figure>
        <figure className="relative aspect-square overflow-hidden rounded-2xl bg-navy">
          <img
            alt={project.afterAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            src={project.afterImage}
          />
          <figcaption className="absolute top-3 left-3 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-navy">
            Después
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default BeforeAfterPair;
