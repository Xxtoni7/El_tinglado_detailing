export function navigateToContactForm({
  documentObject = document,
  event,
}) {
  event.preventDefault();

  const contactForm = documentObject.getElementById("contactForm");

  if (!contactForm) {
    return false;
  }

  contactForm.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return true;
}
