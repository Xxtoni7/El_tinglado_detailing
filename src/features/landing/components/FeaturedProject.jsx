import { useReveal } from "../hooks/useReveal.js";

function FeaturedProject({ onContact, project }) {
  const { ref: imageRef, isVisible: isImageVisible } = useReveal();
  const { ref: contentRef, isVisible: isContentVisible } = useReveal();

  return (
    <article className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
      <div
        className={`reveal group overflow-hidden rounded-[20px] bg-navy md:col-span-8 ${
          isImageVisible ? "reveal-visible" : ""
        }`}
        ref={imageRef}
      >
        <img
          alt={project.primaryAlt}
          className="aspect-16/10 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 max-md:active:scale-105"
          loading="lazy"
          src={project.primaryImage}
        />
      </div>
      <div
        className={`reveal flex flex-col md:col-span-4 ${
          isContentVisible ? "reveal-visible" : ""
        }`}
        ref={contentRef}
        style={{ transitionDelay: "120ms" }}
      >
        <p className="text-sm font-semibold tracking-[0.12em] text-lime uppercase">
          Trabajo destacado
        </p>
        <h3 className="mt-2 font-heading text-[clamp(1.6rem,2.4vw,2.3rem)] leading-[1.08] font-bold text-navy">
          {project.vehicle}
        </h3>
        <p className="mt-3 text-base font-semibold text-navy">
          {project.service}
        </p>
        <p className="mt-4 leading-[1.7] text-[#6E6A64]">
          {project.description}
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl bg-navy">
          <img
            alt={project.detailAlt}
            className="aspect-square h-full w-full object-cover"
            loading="lazy"
            src={project.detailImage}
          />
        </div>
        <a
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy-light focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime"
          href="#consulta"
          onClick={onContact}
        >
          Quiero un resultado así
        </a>
      </div>
    </article>
  );
}

export default FeaturedProject;
