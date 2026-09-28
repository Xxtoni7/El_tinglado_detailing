import { useEffect, useRef, useState } from "react";

const sectionIds = ["inicio", "taller", "servicios", "resenas", "consulta"];

export function useHeaderState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const navigationTarget = useRef(null);
  const updateHeaderRef = useRef(() => {});

  useEffect(() => {
    function updateHeader() {
      setIsScrolled(window.scrollY > 60);

      if (navigationTarget.current) {
        return;
      }

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

    updateHeaderRef.current = updateHeader;
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    return () => {
      updateHeaderRef.current = () => {};
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  function setNavigationTarget(id) {
    navigationTarget.current = id;
    setActiveSection(id);
  }

  function resumeSectionTracking() {
    navigationTarget.current = null;
    updateHeaderRef.current();
  }

  return {
    activeSection,
    isMenuOpen,
    isScrolled,
    toggleMenu: () => setIsMenuOpen((open) => !open),
    closeMenu: () => setIsMenuOpen(false),
    setNavigationTarget,
    resumeSectionTracking,
  };
}
