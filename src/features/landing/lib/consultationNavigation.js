import { navigateToSection } from "./sectionNavigation.js";

export function navigateToContactForm({
  documentObject = document,
  event,
  windowObject = window,
}) {
  return navigateToSection({
    activeSectionId: "consulta",
    documentObject,
    event,
    scrollMode: "into-view",
    targetId: "contactForm",
    windowObject,
  });
}
