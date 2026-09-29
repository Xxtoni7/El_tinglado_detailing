export function normalizeReviewIndex(index, reviewCount) {
  if (reviewCount <= 0) {
    return 0;
  }

  return ((index % reviewCount) + reviewCount) % reviewCount;
}

export function getNextReviewIndex(currentIndex, reviewCount) {
  return normalizeReviewIndex(currentIndex + 1, reviewCount);
}

export function getPreviousReviewIndex(currentIndex, reviewCount) {
  return normalizeReviewIndex(currentIndex - 1, reviewCount);
}

export function shouldAutoplayReviews({
  isPageVisible,
  isSectionVisible,
  prefersReducedMotion,
  reviewCount,
  userHasPaused,
}) {
  return (
    isPageVisible &&
    isSectionVisible &&
    !prefersReducedMotion &&
    reviewCount > 1 &&
    !userHasPaused
  );
}
