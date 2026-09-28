import { useEffect, useRef, useState } from "react";
import heroVideo from "../../../assets/images/hero/heroVideo.mp4";
import logo from "../../../assets/images/Logo.PNG";
import Container from "../../../shared/ui/Container.jsx";
import Entrance from "../../../shared/ui/Entrance.jsx";

const stats = [
  { value: "+500", label: "Vehículos atendidos" },
  { value: "5.0★", label: "En Google Maps" },
  { value: "+12", label: "Años de experiencia" },
];

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export { WhatsAppIcon };

function getElementTopWithoutTransform(element) {
  const revealContainer = element.closest(".reveal");
  const transform = revealContainer
    ? getComputedStyle(revealContainer).transform
    : "none";
  const translateY =
    transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;

  return element.getBoundingClientRect().top + window.scrollY - translateY;
}

function scrollToServices(event) {
  const eyebrow = document.getElementById("servicios-eyebrow");

  if (!eyebrow) {
    return;
  }

  event.preventDefault();
  window.history.pushState(null, "", "#servicios");

  const scrollPaddingTop = Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  );
  const top = getElementTopWithoutTransform(eyebrow) - scrollPaddingTop;

  window.scrollTo({
    behavior: "smooth",
    top: Math.max(0, top),
  });
}

function Hero() {
  const heroBackgroundRef = useRef(null);
  const heroStatsRef = useRef(null);
  const [counterValues, setCounterValues] = useState(() =>
    stats.map(({ value }) => value),
  );

  useEffect(() => {
    function updateParallax() {
      if (window.scrollY >= window.innerHeight || !heroBackgroundRef.current) {
        return;
      }

      const offset = window.scrollY * 0.3;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const scale = isMobile ? 1.5 : 1.05;
      const verticalOffset = isMobile ? 36 : 0;

      heroBackgroundRef.current.style.transform = `translateY(${offset + verticalOffset}px) scale(${scale})`;
    }

    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();

    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  useEffect(() => {
    const heroStats = heroStatsRef.current;

    if (!heroStats) return undefined;

    let startTimer;
    let counterInterval;

    function startCounters() {
      const counterParts = stats.map(({ value }) => {
        const match = /\+?(\d+)/.exec(value);
        const target = Number.parseInt(match[1], 10);

        return {
          prefix: value.startsWith("+") ? "+" : "",
          suffix: value.replace(/\+?\d+/, ""),
          target,
        };
      });
      const steps = 60;
      let currentStep = 0;

      setCounterValues(
        counterParts.map(({ prefix, suffix }) => `${prefix}0${suffix}`),
      );

      counterInterval = window.setInterval(() => {
        currentStep += 1;

        setCounterValues(
          counterParts.map(
            ({ prefix, suffix, target }) =>
              `${prefix}${Math.floor((target / steps) * currentStep)}${suffix}`,
          ),
        );

        if (currentStep >= steps) window.clearInterval(counterInterval);
      }, 2000 / steps);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTimer = window.setTimeout(startCounters, 500);
          observer.unobserve(heroStats);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(heroStats);

    return () => {
      observer.disconnect();
      window.clearTimeout(startTimer);
      window.clearInterval(counterInterval);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      id="inicio"
    >
      <div className="absolute inset-0 before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(135deg,rgba(15,27,51,0.85),rgba(15,27,51,0.5)_50%,rgba(15,27,51,0.7))]">
        <video
          autoPlay
          playsInline
          className="size-full object-cover brightness-[.35] max-md:object-[62%_68%]"
          height="1080"
          loop
          muted
          ref={heroBackgroundRef}
          src={heroVideo}
          width="1920"
        />
      </div>
      <Container className="relative z-10 w-full py-32 pb-8 max-md:py-26 max-md:pb-12">
        <div className="grid grid-cols-[minmax(0,1fr)_clamp(180px,22vw,300px)] items-center gap-[clamp(2rem,7vw,7rem)] max-md:flex max-md:flex-col max-md:gap-7">
          <div className="max-w-170 max-md:contents">
            <Entrance
              as="h1"
              className="relative mb-6 font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-extrabold text-white md:top-10 md:inline-block max-md:order-1"
              delay={0.1}
              mobileDelay={0.2}
            >
              Tu auto a otro
              <br />
              <span className="block text-center text-lime">Nivel</span>
            </Entrance>
            <div
              aria-hidden="true"
              className="mb-10 h-23.5 max-md:hidden"
            />
            <Entrance
              className="flex flex-wrap gap-4 max-md:order-3 max-sm:flex-col"
              delay={0.28}
              mobileDelay={0.5}
            >
              <a
                className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-navy transition hover:scale-105 hover:shadow-[0_0_24px_rgba(200,230,50,0.25)] max-sm:justify-center"
                href="https://wa.me/5491125237023?text=Hola!%20Vengo%20desde%20la%20web%20y%20quiero%20consultar%20por%20los%20servicios."
                id="hero-whatsapp-btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-5" />
                Escribinos por WhatsApp
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-lime hover:bg-lime/10 max-sm:justify-center"
                href="#servicios"
                onClick={scrollToServices}
              >
                Ver servicios
                <svg
                  className="size-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </a>
            </Entrance>
          </div>
          <Entrance
            className="justify-self-end rounded-full border border-lime/65 bg-navy/60 p-[0.6rem] shadow-[0_16px_42px_rgba(0,0,0,0.32)] max-md:order-2 max-md:size-[min(150px,42vw)] max-md:self-center"
            delay={0.15}
            from="right"
            mobileDelay={0.35}
            mobileFrom="top"
            style={{ aspectRatio: "1" }}
          >
            <img
              alt="El tinglado Detailing"
              className="size-full rounded-full object-cover"
              height="1280"
              src={logo}
              width="1280"
            />
          </Entrance>
        </div>
        <Entrance
          className="mx-auto mt-[clamp(2.5rem,5vh,4rem)] flex justify-center gap-12 border-t border-white/10 pt-8 max-md:gap-6 max-sm:justify-between max-sm:gap-2"
          delay={0.55}
          from="none"
          mobileDelay={0}
          ref={heroStatsRef}
        >
          {stats.map(({ label }, index) => (
            <div className="min-w-0 text-center max-sm:flex-1" key={label}>
              <div className="font-heading text-2xl font-extrabold text-lime max-md:text-2xl">
                {counterValues[index]}
              </div>
              <div className="mt-1 text-[0.8rem] tracking-wider text-white/50 uppercase">
                {label}
              </div>
            </div>
          ))}
        </Entrance>
        <Entrance
          className="hero-scroll mx-auto mt-8 flex w-fit flex-col items-center gap-2 text-[0.7rem] tracking-widest text-white/40 uppercase"
          delay={0.7}
          from="none"
          mobileFrom="top"
        >
          <div className="h-9.5 w-6 rounded-[14px] border-2 border-white/30 max-md:hidden" />
          <svg
            aria-hidden="true"
            className="hidden h-8 w-[1.45rem] max-md:block"
            fill="none"
            viewBox="0 0 24 34"
          >
            <rect
              height="25"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              x="4"
              y="1.5"
            />
            <path
              d="M10 23h4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
          Descubrí más
        </Entrance>
      </Container>
    </section>
  );
}

export default Hero;
