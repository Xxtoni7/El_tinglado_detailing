import { formatReviewDate } from "../lib/reviewDates.js";

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

function ReviewCard({ isClone = false, review }) {
  return (
    <a
      aria-hidden={isClone || undefined}
      aria-label={`Ver reseña de ${review.name} en Google Maps`}
      className="review-card relative block h-full rounded-[20px] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,.12)] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,.15)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime max-md:min-w-0 max-md:p-[0.85rem]"
      href={review.googleMapsUrl}
      rel="noopener noreferrer"
      tabIndex={isClone ? -1 : undefined}
      target="_blank"
    >
      <div className="mb-4 flex items-center gap-4 max-md:mb-[.65rem] max-md:gap-2">
        <div className="flex size-12 items-center justify-center rounded-full bg-navy font-heading text-[1.1rem] font-bold text-lime max-md:size-8 max-md:text-[.7rem]">
          {review.initials}
        </div>
        <div className="min-w-0">
          <div className="text-[.95rem] font-semibold text-navy max-md:text-[.72rem] max-md:leading-[1.2]">
            {review.name}
          </div>
          <div className="text-[.8rem] text-[#9B9690] max-md:text-[.62rem]">
            {formatReviewDate(review.publishedAt)}
          </div>
        </div>
      </div>
      <div className="mb-4 flex gap-0.5 text-[#FBBF24] max-md:mb-[.65rem] max-md:gap-px">
        <Stars className="size-4 max-md:size-2.75" />
      </div>
      <p className="text-[.9rem] leading-[1.7] text-[#6E6A64] max-md:text-[.72rem] max-md:leading-[1.45]">
        {review.content}
      </p>
    </a>
  );
}

export { Stars };
export default ReviewCard;
