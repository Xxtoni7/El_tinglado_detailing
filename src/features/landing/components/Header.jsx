import logo from "../../../assets/images/Logo.jpeg";
import { navigation } from "../data/navigation.js";
import Container from "../../../shared/ui/Container.jsx";

function Header() {
  return (
    <header
      className="fixed top-0 z-50 w-full py-4 transition-[background,padding,box-shadow] duration-400"
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
        <nav className="hidden items-center gap-8 md:flex" id="navLinks">
          {navigation.map(({ id, label, href }) => (
            <a
              className={
                id === "consulta"
                  ? "rounded-full bg-lime px-[1.4rem] py-2 text-[0.85rem] font-semibold text-navy transition hover:scale-105 hover:shadow-[0_0_24px_rgba(200,230,50,0.25)]"
                  : "relative text-sm font-medium text-white/75 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-lime after:transition-[width] hover:after:w-full"
              }
              href={href}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Abrir menú"
          className="flex flex-col gap-[5px] p-1 md:hidden"
          id="menuToggle"
          type="button"
        >
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
        </button>
      </Container>
    </header>
  );
}

export default Header;
