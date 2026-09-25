import { business } from "../data/business.js";
import { reviews } from "../data/reviews.js";
import { useReveal } from "../hooks/useReveal.js";
import Container from "../../../shared/ui/Container.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";
import ReviewCard, { Stars } from "./ReviewCard.jsx";

function ReviewsSection() {
  const { ref: headingRef, isVisible: isHeadingVisible } = useReveal();
  const { ref: scoreRef, isVisible: isScoreVisible } = useReveal();

  return (
    <section className="bg-[#F3F1EE] py-[clamp(4rem,8vw,7rem)]" id="resenas">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <div
            className={`reveal ${isHeadingVisible ? "reveal-visible" : ""}`}
            ref={headingRef}
          >
            <SectionHeading
              eyebrow="Reseñas"
              title={
                <>
                  Lo que dicen <br />
                  nuestros clientes
                </>
              }
            />
          </div>
          <div
            className={`reveal flex items-center gap-6 rounded-[20px] bg-white px-8 py-6 shadow-[0_1px_3px_rgba(0,0,0,.12)] ${
              isScoreVisible ? "reveal-visible" : ""
            }`}
            ref={scoreRef}
          >
            <div className="font-heading text-[3.5rem] leading-none font-extrabold text-navy">
              4.9
            </div>
            <div>
              <div className="mb-1 flex gap-0.5 text-[#FBBF24]">
                <Stars className="size-5" />
              </div>
              <div className="text-[.85rem] text-[#9B9690]">
                Basado en 87 reseñas de Google
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-md:grid-cols-2 max-md:gap-3">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              revealDelay={index * 100}
              review={review}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[.9rem] font-semibold text-navy shadow-[0_1px_3px_rgba(0,0,0,.12)] transition hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(0,0,0,.15)]"
            href={business.googleReviewsUrl}
            id="reviews-google-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ReviewsSection;
