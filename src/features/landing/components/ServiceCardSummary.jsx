function ServiceCardSummary({ onConsult, service, variant }) {
  const isMobile = variant === "mobile";
  const summaryClassName = isMobile
    ? "flex flex-1 flex-col p-5"
    : "flex flex-1 flex-col p-6";
  const titleClassName = isMobile
    ? "font-heading text-lg font-bold leading-[1.3] text-white"
    : "mb-3 font-heading text-xl font-bold text-white";
  const descriptionClassName = isMobile
    ? "mt-3 text-sm leading-[1.6] text-white/55"
    : "mb-5 text-[0.9rem] leading-[1.7] text-white/55";
  const tagsClassName = isMobile
    ? "mt-4 flex flex-wrap gap-2"
    : "mb-5 flex flex-wrap gap-2";
  const tagClassName = isMobile
    ? "rounded-full border border-lime/15 bg-lime/8 px-2.5 py-1 text-[0.68rem] font-semibold text-lime"
    : "rounded-full border border-lime/15 bg-lime/8 px-[0.8rem] py-[0.3rem] text-[0.75rem] font-semibold text-lime";
  const linkClassName = isMobile
    ? "flex min-h-11 w-full items-center justify-center rounded-full bg-lime px-4 py-2 text-sm font-bold text-navy"
    : "flex min-h-12 w-full items-center justify-center rounded-full bg-lime px-5 py-[0.85rem] text-[0.9rem] font-bold tracking-[0.01em] text-navy shadow-[0_10px_22px_rgba(200,230,50,.16)] transition hover:-translate-y-0.5 hover:bg-lime-dark hover:shadow-[0_14px_28px_rgba(200,230,50,.22)]";

  return (
    <div className={summaryClassName}>
      <h3 className={titleClassName}>{service.name}</h3>
      <p className={descriptionClassName}>{service.description}</p>
      <div className={tagsClassName}>
        {service.tags.map((tag) => (
          <span className={tagClassName} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {isMobile ? (
        <div className="mt-auto pt-5">
          <a
            className={linkClassName}
            href="#consulta"
            onClick={(event) => onConsult(event, service.name)}
          >
            Consultar
          </a>
        </div>
      ) : (
        <div className="mt-auto border-t border-white/6 pt-5">
          <a
            className={linkClassName}
            href="#consulta"
            onClick={(event) => onConsult(event, service.name)}
          >
            Consultar
          </a>
        </div>
      )}
    </div>
  );
}

export default ServiceCardSummary;
