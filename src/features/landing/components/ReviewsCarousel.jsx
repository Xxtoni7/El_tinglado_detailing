import { useCallback, useEffect, useRef, useState } from "react";
import { getNextReviewIndex, getPreviousReviewIndex, normalizeReviewIndex, shouldAutoplayReviews } from "../lib/reviewCarousel.js";
import ReviewCard from "./ReviewCard.jsx";

const AUTOPLAY_DELAY = 7500;
const INTERACTION_PAUSE = 8000;
const CLONED_REVIEW_COUNT = 3;

function ReviewsCarousel({ isActive, reviews }) {
  const carouselRef = useRef(null);
  const currentIndexRef = useRef(0);
  const pointerStartXRef = useRef(0);
  const didDragRef = useRef(false);
  const scrollEndTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const reviewCount = reviews.length;
  const clonedReviews = reviews.slice(
    0,
    Math.min(CLONED_REVIEW_COUNT, reviewCount),
  );

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateMotionPreference() {
      setPrefersReducedMotion(mediaQuery.matches);
    }

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    function updatePageVisibility() {
      setIsPageVisible(document.visibilityState === "visible");
    }

    updatePageVisibility();
    document.addEventListener("visibilitychange", updatePageVisibility);

    return () => {
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(scrollEndTimerRef.current);
      window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const scrollToRawIndex = useCallback(
    (rawIndex, behavior = "smooth") => {
      const carousel = carouselRef.current;
      const slide = carousel?.querySelectorAll("[data-review-slide]")[
        rawIndex
      ];

      if (!carousel || !slide) {
        return;
      }

      const firstSlide = carousel.querySelector("[data-review-slide]");
      const firstSlideOffset = firstSlide?.offsetLeft ?? 0;

      carousel.scrollTo({
        behavior: prefersReducedMotion ? "auto" : behavior,
        left: slide.offsetLeft - firstSlideOffset,
      });
    },
    [prefersReducedMotion],
  );

  const showNextReview = useCallback(() => {
    const nextIndex = getNextReviewIndex(
      currentIndexRef.current,
      reviewCount,
    );
    const rawIndex = nextIndex === 0 ? reviewCount : nextIndex;

    scrollToRawIndex(rawIndex);
  }, [reviewCount, scrollToRawIndex]);

  const showPreviousReview = useCallback(() => {
    const previousIndex = getPreviousReviewIndex(
      currentIndexRef.current,
      reviewCount,
    );

    if (currentIndexRef.current === 0) {
      scrollToRawIndex(reviewCount, "auto");
      window.requestAnimationFrame(() => {
        scrollToRawIndex(previousIndex);
      });
      return;
    }

    scrollToRawIndex(previousIndex);
  }, [reviewCount, scrollToRawIndex]);

  useEffect(() => {
    function alignCurrentReview() {
      scrollToRawIndex(currentIndexRef.current, "auto");
    }

    window.addEventListener("resize", alignCurrentReview);

    return () => {
      window.removeEventListener("resize", alignCurrentReview);
    };
  }, [scrollToRawIndex]);

  function pauseAfterInteraction() {
    window.clearTimeout(resumeTimerRef.current);
    setIsTemporarilyPaused(true);

    resumeTimerRef.current = window.setTimeout(() => {
      setIsTemporarilyPaused(false);
    }, INTERACTION_PAUSE);
  }

  function selectReview(index) {
    pauseAfterInteraction();
    scrollToRawIndex(index);
  }

  function findNearestRawIndex(carousel) {
    const slides = Array.from(
      carousel.querySelectorAll("[data-review-slide]"),
    );
    const firstSlideOffset = slides[0]?.offsetLeft ?? 0;

    return slides.reduce((nearestIndex, slide, index) => {
      const nearestDistance = Math.abs(
        slides[nearestIndex].offsetLeft -
          firstSlideOffset -
          carousel.scrollLeft,
      );
      const currentDistance = Math.abs(
        slide.offsetLeft - firstSlideOffset - carousel.scrollLeft,
      );

      return currentDistance < nearestDistance ? index : nearestIndex;
    }, 0);
  }

  function normalizeClonedPosition(rawIndex) {
    window.clearTimeout(scrollEndTimerRef.current);

    if (rawIndex < reviewCount) {
      return;
    }

    const normalizedIndex = normalizeReviewIndex(rawIndex, reviewCount);

    scrollEndTimerRef.current = window.setTimeout(() => {
      scrollToRawIndex(normalizedIndex, "auto");
    }, 180);
  }

  function updateCurrentReview(event) {
    const rawIndex = findNearestRawIndex(event.currentTarget);
    const normalizedIndex = normalizeReviewIndex(rawIndex, reviewCount);

    setCurrentIndex(normalizedIndex);
    normalizeClonedPosition(rawIndex);
  }

  function handlePointerDown(event) {
    pointerStartXRef.current = event.clientX;
    didDragRef.current = false;
    setIsPointerActive(true);
    pauseAfterInteraction();
  }

  function handlePointerMove(event) {
    if (Math.abs(event.clientX - pointerStartXRef.current) > 8) {
      didDragRef.current = true;
    }
  }

  function handlePointerEnd() {
    setIsPointerActive(false);
    pauseAfterInteraction();
  }

  function handleLinkClick(event) {
    if (!didDragRef.current) {
      return;
    }

    event.preventDefault();
    didDragRef.current = false;
  }

  function handleFocus(event) {
    if (event.currentTarget.contains(event.target)) {
      setIsFocusWithin(true);
    }
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocusWithin(false);
      pauseAfterInteraction();
    }
  }

  const shouldAutoplay = shouldAutoplayReviews({
    isPageVisible,
    isSectionVisible: isActive,
    prefersReducedMotion,
    reviewCount,
    userHasPaused:
      isHovered ||
      isFocusWithin ||
      isPointerActive ||
      isTemporarilyPaused,
  });

  useEffect(() => {
    if (!shouldAutoplay) {
      return undefined;
    }

    const intervalId = window.setInterval(
      showNextReview,
      AUTOPLAY_DELAY,
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, [shouldAutoplay, showNextReview]);

  return (
    <section
      aria-label="Reseñas de clientes"
      aria-roledescription="carrusel"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(false);
        }
      }}
    >
      <div
        className="-my-4 overflow-x-auto overscroll-x-contain py-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
        onClickCapture={handleLinkClick}
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onScroll={updateCurrentReview}
        ref={carouselRef}
      >
        <div className="flex snap-x snap-mandatory items-stretch gap-6 max-md:gap-3">
          {[...reviews, ...clonedReviews].map((review, index) => {
            const isClone = index >= reviewCount;

            return (
              <div
                aria-label={
                  isClone
                    ? undefined
                    : `${index + 1} de ${reviewCount}`
                }
                aria-roledescription={isClone ? undefined : "diapositiva"}
                className="flex shrink-0 basis-[calc((100%-3rem)/3)] snap-start snap-always max-md:basis-[calc((100%-0.75rem)/2)]"
                data-review-slide
                key={`${review.name}-${isClone ? "clone" : "original"}`}
                role={isClone ? undefined : "group"}
              >
                <ReviewCard
                  isClone={isClone}
                  review={review}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between max-md:justify-center">
        <div
          aria-label={`Reseña ${currentIndex + 1} de ${reviewCount}`}
          className="flex items-center gap-2"
        >
          {reviews.map((review, index) => (
            <button
              aria-label={`Mostrar reseña de ${review.name}`}
              className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                index === currentIndex
                  ? "w-8 bg-lime"
                  : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
              key={review.name}
              onClick={() => selectReview(index)}
              type="button"
            />
          ))}
        </div>

        <div className="flex gap-3 max-md:hidden">
          <button
            aria-label="Mostrar reseña anterior"
            className="flex size-11 items-center justify-center rounded-full bg-white text-navy shadow-[0_1px_3px_rgba(0,0,0,.12)] transition hover:-translate-y-0.5 hover:bg-navy hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
            onClick={() => {
              pauseAfterInteraction();
              showPreviousReview();
            }}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m15 18-6-6 6-6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            aria-label="Mostrar siguiente reseña"
            className="flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-[0_1px_3px_rgba(0,0,0,.12)] transition hover:-translate-y-0.5 hover:bg-lime hover:text-navy focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-lime"
            onClick={() => {
              pauseAfterInteraction();
              showNextReview();
            }}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m9 18 6-6-6-6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
