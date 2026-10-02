import { useRef } from "react";
import logo from "../../../../assets/images/Logo.PNG";
import { useHeaderState } from "../../hooks/useHeaderState.js";
import { navigation } from "../../data/navigation.js";
import Container from "../../../../shared/ui/Container.jsx";

function getElementTopWithoutTransform(element) {
  const revealContainer = element.closest(".reveal");
  const transform = revealContainer
    ? getComputedStyle(revealContainer).transform
    : "none";
  const translateY =
    transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;

  return element.getBoundingClientRect().top + window.scrollY - translateY;
}

function Header() {
  const navigationSequence = useRef(0);
  const {
    activeSection,
    isMenuOpen,
    isScrolled,
    toggleMenu,
    closeMenu,
    setNavigationTarget,
    resumeSectionTracking,
  } = useHeaderState();

  function scrollToSection(event, id, href) {
    const eyebrow = document.getElementById(`${id}-eyebrow`);
    const target = eyebrow ?? document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    setNavigationTarget(id);
    window.history.pushState(null, "", href);

    const scrollPaddingTop = Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const top = getElementTopWithoutTransform(target) - scrollPaddingTop;
    const currentNavigation = navigationSequence.current + 1;

    navigationSequence.current = currentNavigation;

    function completeNavigation() {
      if (navigationSequence.current !== currentNavigation) {
        return;
      }

      resumeSectionTracking();
    }

    window.addEventListener("scrollend", completeNavigation, { once: true });
    window.setTimeout(completeNavigation, 1000);

    window.scrollTo({
      behavior: "smooth",
      top: Math.max(0, top),
    });
  }

  return (
    <header
      className={`fixed top-0 z-1000 w-full leading-[1.6] transition-[background,padding,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-navy/95 py-[.6rem] shadow-[0_4px_24px_rgba(0,0,0,.3)] backdrop-blur-lg"
          : "py-4"
      }`}
      id="header"
    >
      <Container className="flex items-center justify-between">
        <a
          className="flex items-center gap-2 font-heading text-2xl font-extrabold text-white"
          href="#inicio"
          onClick={(event) => {
            scrollToSection(event, "inicio", "#inicio");
          }}
        >
          <img
            alt="El tinglado Detailing"
            className="size-7 rounded-md"
            height="100"
            src={logo}
            width="100"
          />
          <span>El tinglado Detailing</span>
        </a>
        <nav
          className={`fixed top-0 flex h-screen w-70 flex-col items-center gap-6 bg-navy px-8 pt-20 pb-8 shadow-[-8px_0_32px_rgba(0,0,0,.3)] transition-[right] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:static md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? "right-0" : "-right-full md:right-auto"
          }`}
          id="primary-navigation"
        >
          {navigation.map(({ id, label, href }) => {
            const activeLinkClass =
              activeSection === id
                ? "after:w-full text-white"
                : "text-white/80 after:w-0 hover:after:w-full";
            const linkClassName =
              id === "consulta"
                ? "rounded-full bg-lime px-[1.4rem] py-[.6rem] text-[0.85rem] font-semibold text-navy transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:shadow-[0_0_24px_rgba(200,230,50,0.25)]"
                : `relative text-[1.1rem] font-medium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-lime after:transition-[width] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[.9rem] ${activeLinkClass}`;

            return (
              <a
                className={linkClassName}
                href={href}
                key={id}
                onClick={(event) => {
                  scrollToSection(event, id, href);
                  closeMenu();
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="z-1001 flex flex-col gap-1.25 p-1 md:hidden"
          id="menuToggle"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "transform-[rotate(45deg)_translate(5px,5px)]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "transform-[rotate(-45deg)_translate(5px,-5px)]" : ""
            }`}
          />
        </button>
      </Container>
    </header>
  );
}

export default Header;
