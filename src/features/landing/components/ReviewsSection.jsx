import { business } from "../data/business.js";
import { reviews } from "../data/reviews.js";
import { useReveal } from "../hooks/useReveal.js";
import Container from "../../../shared/ui/Container.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";
import { Stars } from "./ReviewCard.jsx";
import ReviewsCarousel from "./ReviewsCarousel.jsx";

function ReviewsSection() {
  const { ref: headingRef, isVisible: isHeadingVisible } = useReveal();
  const { ref: scoreRef, isVisible: isScoreVisible } = useReveal();
  const { ref: carouselRef, isVisible: isCarouselVisible } = useReveal();

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
              eyebrowId="resenas-eyebrow"
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
              5.0
            </div>
            <div>
              <div className="mb-1 flex gap-0.5 text-[#FBBF24]">
                <Stars className="size-5" />
              </div>
              <div className="text-[.85rem] text-[#9B9690]">
                Más de 50 reseñas en Google
              </div>
            </div>
          </div>
        </div>
        <div
          className={`reveal ${
            isCarouselVisible ? "reveal-visible" : ""
          }`}
          ref={carouselRef}
        >
          <ReviewsCarousel
            isActive={isCarouselVisible}
            reviews={reviews}
          />
        </div>
        <div className="mt-10 text-center">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-[1.8rem] py-[0.8rem] text-[.9rem] font-semibold text-navy shadow-[0_1px_3px_rgba(0,0,0,.12)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(0,0,0,.15)]"
            href={business.googleReviewsUrl}
            id="reviews-google-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
                fill="#EA4335"
              />
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ReviewsSection;
