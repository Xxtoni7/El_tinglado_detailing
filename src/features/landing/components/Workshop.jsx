import workshopImage from "../../../assets/images/workshop/taller.webp";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal.js";
import Container from "../../../shared/ui/Container.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";

const features = [
  [
    "Iluminación LED",
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </>,
  ],
  [
    "Productos premium",
    <path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  ],
  [
    "Calidad garantizada",
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>,
  ],
  [
    "Espacio protegido",
    <>
      <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>,
  ],
];

function Workshop() {
  const { ref: headingRef, isVisible: isHeadingVisible } = useReveal();
  const { ref: imageRef, isVisible: isImageVisible } = useReveal();
  const { ref: textRef, isVisible: isTextVisible } = useReveal();
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  function toggleImageZoom() {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    setIsImageZoomed((isZoomed) => !isZoomed);
  }

  return (
    <section
      className="bg-warm py-[clamp(4rem,8vw,7rem)] max-md:py-12"
      id="taller"
    >
      <Container>
        <div
          className={`reveal ${isHeadingVisible ? "reveal-visible" : ""}`}
          ref={headingRef}
        >
          <SectionHeading
            eyebrow="Nuestro taller"
            eyebrowId="taller-eyebrow"
            title={
              <>
                Donde la perfección se <br className="max-md:hidden" />
                encuentra con la tecnología
              </>
            }
            description="Equipamiento de última generación y un equipo apasionado por el cuidado automotriz."
            descriptionClassName="max-md:hidden"
          />
        </div>
        <div className="mt-12 grid grid-cols-2 items-center gap-12 md:items-start max-md:mt-6 max-md:grid-cols-1 max-md:gap-6">
          <button
            type="button"
            className={`reveal group relative aspect-3/2 overflow-hidden rounded-[20px] border-0 bg-transparent p-0 text-left md:aspect-7/5 max-md:aspect-7/5 ${
              isImageVisible ? "reveal-visible" : ""
            }`}
            aria-label="Ampliar imagen del taller"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleImageZoom();
              }
            }}
            onClick={toggleImageZoom}
            ref={imageRef}
          >
            <img
              alt="Interior del taller de detailing"
              className={`h-full w-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                isImageZoomed ? "max-md:scale-105" : ""
              }`}
              height="600"
              loading="lazy"
              src={workshopImage}
              width="800"
            />
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-navy/80 px-[1.2rem] py-[0.7rem] text-[0.85rem] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,.18)] max-md:bottom-4 max-md:left-4">
              <svg
                className="size-4 text-lime"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m22 4-10 10.01-3-3" />
              </svg>
              Taller certificado
            </div>
          </button>
          <div
            className={`reveal md:-mt-3 ${isTextVisible ? "reveal-visible" : ""}`}
            ref={textRef}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="mb-4 font-heading text-[1.3rem] font-bold text-navy max-md:mb-3 max-md:leading-[1.35]">
              Un espacio diseñado para el cuidado de tu vehículo
            </h3>
            <p className="mb-6 leading-[1.8] text-[#6E6A64]  max-md:mb-4 max-md:leading-[1.65]">
              En El Tinglado Detailing llevamos la estética y protección de tu vehículo a otro nivel. Combinamos procesos profesionales, iluminación técnica y productos premium para lograr un acabado que se nota desde el primer vistazo.
            </p>
            <p className="mb-6 leading-[1.8] text-[#6E6A64] max-md:mb-4 max-md:leading-[1.65]">
              Desde una limpieza profunda hasta una corrección de pintura, tratamos cada vehículo como único para que vuelva a lucir impecable y se mantenga protegido por más tiempo.
            </p>
            <div className="grid grid-cols-2 gap-4 max-md:mt-6 max-md:gap-3 max-[359px]:grid-cols-1">
              {features.map(([label, paths]) => (
                <div
                  className="flex items-center gap-3 rounded-xl bg-[#F3F1EE] px-4 py-[0.8rem] text-[0.9rem] font-medium transition hover:-translate-y-0.5 hover:bg-navy hover:text-white max-md:gap-1.5 max-md:px-2 max-md:py-3 max-md:text-[0.80rem]"
                  key={label}
                >
                  <svg
                    className="size-5 shrink-0 text-lime max-md:size-4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {paths}
                  </svg>
                  <span className="max-md:whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Workshop;
