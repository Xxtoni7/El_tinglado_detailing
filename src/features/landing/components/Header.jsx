import logo from "../../../assets/images/Logo.png";
import { useHeaderState } from "../hooks/useHeaderState.js";
import { navigation } from "../data/navigation.js";
import Container from "../../../shared/ui/Container.jsx";

function Header() {
  const { activeSection, isMenuOpen, isScrolled, toggleMenu, closeMenu } =
    useHeaderState();

  return (
    <header
      className={`fixed top-0 z-[1000] w-full leading-[1.6] transition-[background,padding,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-navy/[.95] py-[.6rem] shadow-[0_4px_24px_rgba(0,0,0,.3)] backdrop-blur-[16px]"
          : "py-4"
      }`}
      id="header"
    >
      <Container className="flex items-center justify-between">
        <a
          className="flex items-center gap-2 font-heading text-2xl font-extrabold text-white"
          href="#inicio"
        >
          <img
            alt="El tinglado Detailing"
            className="size-7 rounded-md"
            height="100"
            src={logo}
            width="100"
          />
          El tinglado Detailing
        </a>
        <nav
          className={`fixed top-0 flex h-screen w-[280px] flex-col gap-6 bg-navy px-8 pt-20 pb-8 shadow-[-8px_0_32px_rgba(0,0,0,.3)] transition-[right] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:static md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? "right-0" : "right-[-100%] md:right-auto"
          }`}
          id="primary-navigation"
        >
          {navigation.map(({ id, label, href }) => (
            <a
              className={
                id === "consulta"
                  ? "rounded-full bg-lime px-[1.4rem] py-[.6rem] text-[0.85rem] font-semibold text-navy transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:shadow-[0_0_24px_rgba(200,230,50,0.25)]"
                  : `relative text-[1.1rem] font-medium transition-[color] duration-300 ease-[ease] hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-lime after:transition-[width] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[.9rem] ${
                      activeSection === id
                        ? "after:w-full text-white"
                        : "text-white/80 after:w-0 hover:after:w-full"
                    }`
              }
              href={href}
              key={id}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="z-[1001] flex flex-col gap-[5px] p-1 md:hidden"
          id="menuToggle"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "[transform:rotate(45deg)_translate(5px,5px)]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-[transform,opacity] duration-300 ease-[ease] ${
              isMenuOpen ? "[transform:rotate(-45deg)_translate(5px,-5px)]" : ""
            }`}
          />
        </button>
      </Container>
    </header>
  );
}

export default Header;
