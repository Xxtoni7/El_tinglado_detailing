const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatReviewDate(publishedAt, now = new Date()) {
  const publishedDate = new Date(publishedAt);

  if (Number.isNaN(publishedDate.getTime())) {
    return "";
  }

  const differenceInDays = Math.round(
    (publishedDate.getTime() - now.getTime()) / DAY_IN_MILLISECONDS,
  );
  const absoluteDays = Math.abs(differenceInDays);
  const formatter = new Intl.RelativeTimeFormat("es-AR", {
    numeric: "auto",
  });

  if (absoluteDays < 7) {
    return capitalize(formatter.format(differenceInDays, "day"));
  }

  if (absoluteDays < 30) {
    return capitalize(
      formatter.format(Math.round(differenceInDays / 7), "week"),
    );
  }

  if (absoluteDays < 365) {
    return capitalize(
      formatter.format(Math.round(differenceInDays / 30.4375), "month"),
    );
  }

  return capitalize(
    formatter.format(Math.round(differenceInDays / 365.25), "year"),
  );
}
