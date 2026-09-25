function ServiceCard({ service, onConsult }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[20px] border border-white/[.06] bg-navy-light transition hover:-translate-y-1.5 hover:border-lime/20">
      <div className="relative h-[220px] overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-navy-light after:to-transparent after:to-60%">
        <img
          alt={service.alt}
          className="size-full object-cover transition duration-[600ms] group-hover:scale-[1.08]"
          height="400"
          loading="lazy"
          src={service.image}
          width="600"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-heading text-xl font-bold text-white">
          {service.name}
        </h3>
        <p className="mb-5 text-[0.9rem] leading-[1.7] text-white/55">
          {service.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              className="rounded-full border border-lime/15 bg-lime/[.08] px-[0.8rem] py-[0.3rem] text-[0.75rem] font-semibold text-lime"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-white/[.06] pt-5">
          <a
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-lime px-5 py-[0.85rem] text-[0.9rem] font-bold tracking-[0.01em] text-navy shadow-[0_10px_22px_rgba(200,230,50,.16)] transition hover:-translate-y-0.5 hover:bg-lime-dark hover:shadow-[0_14px_28px_rgba(200,230,50,.22)]"
            href="#consulta"
            onClick={() => onConsult(service.name)}
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
