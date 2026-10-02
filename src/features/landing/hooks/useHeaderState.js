import { useEffect, useRef, useState } from "react";
import {
  SECTION_NAVIGATION_END_EVENT,
  SECTION_NAVIGATION_START_EVENT,
} from "../lib/sectionNavigation.js";

const sectionIds = [
  "inicio",
  "taller",
  "servicios",
  "trabajos",
  "resenas",
  "consulta",
];

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

    function startSectionNavigation({ detail }) {
      if (!sectionIds.includes(detail.sectionId)) {
        return;
      }

      navigationTarget.current = detail;
      setActiveSection(detail.sectionId);
    }

    function completeSectionNavigation({ detail }) {
      if (navigationTarget.current?.navigationId !== detail.navigationId) {
        return;
      }

      navigationTarget.current = null;
      updateHeaderRef.current();
    }

    updateHeaderRef.current = updateHeader;
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener(
      SECTION_NAVIGATION_START_EVENT,
      startSectionNavigation,
    );
    window.addEventListener(
      SECTION_NAVIGATION_END_EVENT,
      completeSectionNavigation,
    );
    updateHeader();

    return () => {
      updateHeaderRef.current = () => {};
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener(
        SECTION_NAVIGATION_START_EVENT,
        startSectionNavigation,
      );
      window.removeEventListener(
        SECTION_NAVIGATION_END_EVENT,
        completeSectionNavigation,
      );
    };
  }, []);

  return {
    activeSection,
    isMenuOpen,
    isScrolled,
    toggleMenu: () => setIsMenuOpen((open) => !open),
    closeMenu: () => setIsMenuOpen(false),
  };
}
