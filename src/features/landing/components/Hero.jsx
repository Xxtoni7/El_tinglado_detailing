import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/Logo.PNG";
import { WhatsAppIcon } from "../../../shared/ui/icons.jsx";
import { buildGeneralWhatsAppUrl } from "../lib/whatsapp.js";
import { navigateToSection } from "../lib/sectionNavigation.js";
import Container from "../../../shared/ui/Container.jsx";
import Entrance from "../../../shared/ui/Entrance.jsx";

const stats = [
  { value: "+500", label: "Vehículos atendidos" },
  { value: "5.0★", label: "En Google Maps" },
  { value: "+12", label: "Años de experiencia" },
];

function scrollToServices(event) {
  navigateToSection({
    activeSectionId: "servicios",
    event,
    fallbackTargetId: "servicios",
    href: "#servicios",
    targetId: "servicios-eyebrow",
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
      <div className="absolute inset-0 bg-navy before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(135deg,rgba(15,27,51,0.85),rgba(15,27,51,0.5)_50%,rgba(15,27,51,0.7))]">
        <video
          autoPlay
          playsInline
          className="size-full object-cover brightness-[.35] max-md:object-[62%_68%]"
          height="1080"
          loop
          muted
          preload="auto"
          ref={heroBackgroundRef}
          src="/hero-video.mp4"
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
                href={buildGeneralWhatsAppUrl()}
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
