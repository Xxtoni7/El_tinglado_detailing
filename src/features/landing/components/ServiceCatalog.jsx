import { useRef, useState } from "react";
import { getServicesByCategory } from "../data/services.js";
import { getCatalogScrollTop } from "../lib/catalogNavigation.js";
import ServiceCard from "./ServiceCard.jsx";

function ServiceCatalog({ categories, onConsult }) {
  const categoryPanelRef = useRef(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id ?? "",
  );

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId,
  );
  const selectedServices = getServicesByCategory(selectedCategoryId);

  if (!selectedCategory) {
    return null;
  }

  function selectCategory(categoryId) {
    if (categoryId === selectedCategoryId) {
      return;
    }

    const categoryPanel = categoryPanelRef.current;

    if (categoryPanel) {
      const scrollPaddingTop = Number.parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop,
      );
      const top = getCatalogScrollTop({
        elementTop: categoryPanel.getBoundingClientRect().top,
        scrollPaddingTop,
        scrollY: window.scrollY,
      });

      window.scrollTo({
        behavior: "smooth",
        top,
      });
    }

    setSelectedCategoryId(categoryId);
  }

  return (
    <div className="grid grid-cols-[minmax(230px,0.34fr)_minmax(0,1fr)] gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
      <aside className="sticky top-28 self-start">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/45">
          Elegí una categoría
        </p>
        <nav
          aria-label="Categorías de servicios"
          className="mt-4 border-y border-white/12"
        >
          {categories.map((category) => {
            const categoryServices = getServicesByCategory(category.id);
            const isSelected = category.id === selectedCategoryId;

            return (
              <button
                aria-pressed={isSelected}
                className={`group flex w-full items-center justify-between gap-4 border-b border-white/12 px-1 py-5 text-left transition last:border-b-0 ${
                  isSelected
                    ? "bg-lime px-5 text-navy"
                    : "text-white hover:px-3 hover:text-lime"
                }`}
                key={category.id}
                onClick={() => selectCategory(category.id)}
                type="button"
              >
                <span className="font-heading text-[1.05rem] font-bold leading-[1.3]">
                  {category.name}
                </span>
                <span
                  className={`shrink-0 text-[0.72rem] font-bold ${
                    isSelected ? "text-navy/60" : "text-white/35"
                  }`}
                >
                  {categoryServices.length}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div
        aria-live="polite"
        key={selectedCategory.id}
        ref={categoryPanelRef}
      >
        <div className="mb-7 border-b border-white/12 pb-6">
          <h3 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.12] text-white">
            {selectedCategory.name}
          </h3>
          <p className="mt-3 max-w-155 text-[0.98rem] leading-[1.7] text-white/60">
            {selectedCategory.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {selectedServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              onConsult={onConsult}
              revealDelay={index * 80}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCatalog;
