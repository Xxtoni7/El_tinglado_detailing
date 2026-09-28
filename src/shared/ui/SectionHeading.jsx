function SectionHeading({ eyebrow, eyebrowId, title, description }) {
  return (
    <>
      <span
        className="mb-4 inline-flex items-center gap-2 font-heading text-[0.8rem] font-semibold tracking-[0.15em] text-lime-dark uppercase before:inline-block before:h-0.5 before:w-8 before:bg-lime before:content-['']"
        id={eyebrowId}
      >
        {eyebrow}
      </span>
      <h2 className="mb-4 font-heading text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold text-navy">
        {title}
      </h2>
      {description ? (
      <p className="max-w-150 text-[1.1rem] leading-[1.7] text-[#6E6A64]">
          {description}
        </p>
      ) : null}
    </>
  );
}

export default SectionHeading;
