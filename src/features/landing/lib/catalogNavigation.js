export function getCatalogScrollTop({
  elementTop,
  scrollPaddingTop,
  scrollY,
}) {
  return Math.max(0, elementTop + scrollY - scrollPaddingTop);
}
