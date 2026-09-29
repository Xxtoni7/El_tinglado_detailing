import { useReveal } from "../hooks/useReveal.js";

function ProjectTile({
  className = "",
  imageClassName = "",
  project,
  revealDelay = 0,
}) {
  const { ref, isVisible } = useReveal();

  return (
    <article
      className={`reveal group min-w-0 ${
        isVisible ? "reveal-visible" : ""
      } ${className}`}
      ref={ref}
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      <div
        className={`relative aspect-4/5 overflow-hidden rounded-[20px] bg-navy ${imageClassName}`}
      >
        <img
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 max-md:group-active:scale-105"
          loading="lazy"
          src={project.image}
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy via-navy/70 to-transparent px-5 pt-16 pb-5 text-white max-md:px-3 max-md:pt-12 max-md:pb-3">
          <h3 className="font-heading text-lg font-bold max-md:text-[0.72rem] max-md:leading-tight max-md:whitespace-nowrap">
            {project.vehicle}
          </h3>
          <p className="mt-1 text-sm leading-snug text-white/75 max-md:text-xs">
            {project.service}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProjectTile;
