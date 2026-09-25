function Stars({ className = "size-4" }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          className={className}
          fill="currentColor"
          key={index}
          viewBox="0 0 24 24"
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </>
  );
}

function ReviewCard({ review, revealDelay }) {
  const { ref, isVisible } = useReveal();

  return (
    <article
      className={`reveal relative rounded-[20px] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,.12)] transition hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,.15)] max-md:min-w-0 max-md:p-[0.85rem] ${
        isVisible ? "reveal-visible" : ""
      }`}
      ref={ref}
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      <div className="absolute top-6 right-6 font-heading text-[2rem] leading-none text-[#E5E2DD] max-md:top-[.7rem] max-md:right-[.7rem] max-md:text-[1.4rem]">
        “
      </div>
      <div className="mb-4 flex items-center gap-4 max-md:mb-[.65rem] max-md:gap-2">
        <div className="flex size-12 items-center justify-center rounded-full bg-navy font-heading text-[1.1rem] font-bold text-lime max-md:size-8 max-md:text-[.7rem]">
          {review.initials}
        </div>
        <div className="min-w-0">
          <div className="text-[.95rem] font-semibold text-navy max-md:text-[.72rem] max-md:leading-[1.2]">
            {review.name}
          </div>
          <div className="text-[.8rem] text-[#9B9690] max-md:text-[.62rem]">
            {review.date}
          </div>
        </div>
      </div>
      <div className="mb-4 flex gap-0.5 text-[#FBBF24] max-md:mb-[.65rem] max-md:gap-px">
        <Stars className="size-4 max-md:size-[11px]" />
      </div>
      <p className="text-[.9rem] leading-[1.7] text-[#6E6A64] max-md:text-[.72rem] max-md:leading-[1.45]">
        {review.content}
      </p>
    </article>
  );
}

export { Stars };
export default ReviewCard;
import { useReveal } from "../hooks/useReveal.js";
