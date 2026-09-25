import { useEffect, useState } from "react";

const sectionIds = ["inicio", "taller", "servicios", "resenas", "consulta"];

export function useHeaderState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    function updateHeader() {
      setIsScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return {
    activeSection,
    isMenuOpen,
    isScrolled,
    toggleMenu: () => setIsMenuOpen((open) => !open),
    closeMenu: () => setIsMenuOpen(false),
  };
}
