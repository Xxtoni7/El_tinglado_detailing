import { useEffect } from "react";
import logo from "../../../assets/images/Logo.PNG";
import { business } from "../../landing/data/business.js";
import Container from "../../../shared/ui/Container.jsx";
import { siteConfig } from "../../../config/site.js";

export function LegalSection({ children, title }) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-2xl leading-tight font-bold text-navy">
        {title}
      </h2>
      <div className="space-y-4 text-[1rem] leading-7 text-[#5F5A54]">
        {children}
      </div>
    </section>
  );
}

function LegalPageLayout({ children, description, title }) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-warm text-navy">
      <header className="border-b border-white/10 bg-navy py-4 text-white">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <a
              className="flex items-center gap-3 font-heading text-lg font-bold transition hover:text-lime"
              href={siteConfig.routes.home}
            >
              <img
                alt="El Tinglado Detailing"
                className="size-10 rounded-full"
                height="100"
                src={logo}
                width="100"
              />
              <span className="max-sm:hidden">El Tinglado Detailing</span>
            </a>
            <a
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-lime hover:text-lime"
              href={siteConfig.routes.home}
            >
              Volver al sitio
            </a>
          </div>
        </Container>
      </header>

      <main className="py-14 sm:py-20">
        <Container>
          <article className="mx-auto max-w-215 rounded-2xl bg-white px-6 py-10 shadow-[0_14px_40px_rgba(15,29,52,0.08)] sm:px-10 sm:py-14 lg:px-16">
            <header className="border-b border-[#E5E2DD] pb-9">
              <h1 className="max-w-175 font-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-navy">
                {title}
              </h1>
              <p className="mt-5 max-w-170 text-lg leading-8 text-[#6E6A64]">
                {description}
              </p>
              <p className="mt-5 text-sm font-semibold text-navy/60">
                Última actualización: 2 de octubre de 2026
              </p>
            </header>

            <div className="mt-10 space-y-10">{children}</div>
          </article>
        </Container>
      </main>

      <footer className="border-t border-white/10 bg-navy py-7 text-center text-sm text-white/55">
        © {currentYear} {business.tradeName}. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default LegalPageLayout;
