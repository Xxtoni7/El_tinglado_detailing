export const SECTION_NAVIGATION_START_EVENT =
  "landing:section-navigation-start";
export const SECTION_NAVIGATION_END_EVENT = "landing:section-navigation-end";

let navigationSequence = 0;
const navigationFallbackDelay = 2500;

export function getElementTopWithoutTransform(
  element,
  windowObject = window,
) {
  const revealContainer = element.closest(".reveal");
  const transform = revealContainer
    ? windowObject.getComputedStyle(revealContainer).transform
    : "none";
  const translateY =
    transform === "none"
      ? 0
      : new windowObject.DOMMatrixReadOnly(transform).m42;

  return (
    element.getBoundingClientRect().top + windowObject.scrollY - translateY
  );
}

export function getScrollTargetTop({ elementDocumentTop, scrollPaddingTop }) {
  return Math.max(0, elementDocumentTop - scrollPaddingTop);
}

export function navigateToSection({
  activeSectionId,
  behavior = "smooth",
  documentObject = document,
  event,
  fallbackTargetId,
  href,
  scrollMode = "position",
  targetId,
  windowObject = window,
}) {
  const target =
    documentObject.getElementById(targetId) ??
    (fallbackTargetId
      ? documentObject.getElementById(fallbackTargetId)
      : null);

  if (!target) {
    return false;
  }

  event.preventDefault();

  const navigationId = navigationSequence + 1;
  const navigationDetail = {
    navigationId,
    sectionId: activeSectionId,
  };
  let isNavigationComplete = false;

  navigationSequence = navigationId;
  windowObject.dispatchEvent(
    new windowObject.CustomEvent(SECTION_NAVIGATION_START_EVENT, {
      detail: navigationDetail,
    }),
  );

  if (href) {
    windowObject.history.pushState(null, "", href);
  }

  function completeNavigation() {
    if (isNavigationComplete || navigationSequence !== navigationId) {
      return;
    }

    isNavigationComplete = true;
    windowObject.removeEventListener("scrollend", completeNavigation);
    windowObject.dispatchEvent(
      new windowObject.CustomEvent(SECTION_NAVIGATION_END_EVENT, {
        detail: navigationDetail,
      }),
    );
  }

  windowObject.addEventListener("scrollend", completeNavigation, {
    once: true,
  });
  windowObject.setTimeout(completeNavigation, navigationFallbackDelay);

  if (scrollMode === "into-view") {
    target.scrollIntoView({
      behavior,
      block: "start",
    });

    return true;
  }

  const scrollPaddingTop = Number.parseFloat(
    windowObject.getComputedStyle(documentObject.documentElement)
      .scrollPaddingTop,
  );
  const top = getScrollTargetTop({
    elementDocumentTop: getElementTopWithoutTransform(target, windowObject),
    scrollPaddingTop,
  });

  windowObject.scrollTo({
    behavior,
    top,
  });

  return true;
}
