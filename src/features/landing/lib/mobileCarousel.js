export function getCarouselProgress({
  clientWidth,
  scrollLeft,
  scrollWidth,
}) {
  const maximumScroll = scrollWidth - clientWidth;

  if (maximumScroll <= 0) {
    return 0;
  }

  return Math.min(1, Math.max(0, scrollLeft / maximumScroll));
}

export function getMobileAccordionScrollTop({
  elementTop,
  scrollPaddingTop,
  scrollY,
  viewportGap,
}) {
  return Math.max(
    0,
    elementTop + scrollY - scrollPaddingTop - viewportGap,
  );
}
