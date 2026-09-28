import { useEffect, useRef, useState } from "react";
import { getServicesByCategory } from "../data/services.js";
import { getCarouselProgress, getMobileAccordionScrollTop } from "../lib/mobileCarousel.js";

function MobileServiceCatalog({ categories, onConsult }) {
  const [openCategoryId, setOpenCategoryId] = useState(
    categories[0]?.id ?? "",
  );
  const [carouselProgress, setCarouselProgress] = useState(0);
  const activeCategoryButtonRef = useRef(null);
  const shouldScrollToCategoryRef = useRef(false);

  useEffect(() => {
    if (!shouldScrollToCategoryRef.current) {
      return;
    }

    const categoryButton = activeCategoryButtonRef.current;

    if (categoryButton) {
      const scrollPaddingTop = Number.parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop,
      );
      const top = getMobileAccordionScrollTop({
        elementTop: categoryButton.getBoundingClientRect().top,
        scrollPaddingTop,
        scrollY: window.scrollY,
        viewportGap: 12,
      });

      window.scrollTo({
        behavior: "smooth",
        top,
      });
    }

    shouldScrollToCategoryRef.current = false;
  }, [openCategoryId]);

  function openCategory(categoryId) {
    if (categoryId === openCategoryId) {
      return;
    }

    shouldScrollToCategoryRef.current = true;
    setOpenCategoryId(categoryId);
    setCarouselProgress(0);
  }

  function updateCarouselProgress(event) {
    const carousel = event.currentTarget;

    setCarouselProgress(
      getCarouselProgress({
        clientWidth: carousel.clientWidth,
        scrollLeft: carousel.scrollLeft,
        scrollWidth: carousel.scrollWidth,
      }),
    );
  }

  return (
    <div className="border-y border-white/10">
      {categories.map((category) => {
        const isOpen = category.id === openCategoryId;
        const services = getServicesByCategory(category.id);
        const contentId = `mobile-services-${category.id}`;

        return (
          <div className="border-b border-white/10 last:border-b-0" key={category.id}>
            <button
              aria-controls={contentId}
              aria-expanded={isOpen}
              className={`flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left transition-colors ${
                isOpen ? "text-lime" : "text-white"
              }`}
              onClick={() => openCategory(category.id)}
              ref={isOpen ? activeCategoryButtonRef : null}
              type="button"
            >
              <span className="font-heading text-base font-bold leading-tight">
                {category.name}
              </span>
              <div className="flex shrink-0 items-center gap-3">
                <span
                  className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${
                    isOpen
                      ? "bg-lime text-navy"
                      : "bg-white/8 text-white/55"
                  }`}
                >
                  {services.length}
                </span>
                <svg
                  aria-hidden="true"
                  className={`size-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div
                aria-live="polite"
                className="pb-6"
                id={contentId}
              >
                <p className="mb-5 text-sm leading-[1.65] text-white/55">
                  {category.description}
                </p>

                <div
                  className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden"
                  key={category.id}
                  onScroll={updateCarouselProgress}
                >
                  {services.map((service) => (
                    <article
                      className="flex w-[88%] max-w-84 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-navy-light"
                      key={service.name}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          alt={service.alt}
                          className="absolute inset-0 size-full object-cover"
                          height="352"
                          loading="lazy"
                          src={service.image}
                          width="672"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-navy-light/65 via-transparent to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-heading text-lg font-bold leading-[1.3] text-white">
                          {service.name}
                        </h3>
                        <p className="mt-3 text-sm leading-[1.6] text-white/55">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              className="rounded-full border border-lime/15 bg-lime/8 px-2.5 py-1 text-[0.68rem] font-semibold text-lime"
                              key={tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-lime px-4 py-2 text-sm font-bold text-navy"
                          href="#consulta"
                          onClick={(event) => onConsult(event, service.name)}
                        >
                          Consultar
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                {services.length > 1 && (
                  <div
                    aria-hidden="true"
                    className="relative mt-3 h-0.5 overflow-hidden bg-white/10"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-14 bg-lime"
                      style={{
                        left: `${carouselProgress * 100}%`,
                        transform: `translateX(-${carouselProgress * 100}%)`,
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MobileServiceCatalog;
