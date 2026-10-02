import { useEffect, useState } from "react";
import ContactSection from "../features/landing/components/ContactSection.jsx";
import FloatingWhatsapp from "../features/landing/components/layout/FloatingWhatsapp.jsx";
import Footer from "../features/landing/components/layout/Footer.jsx";
import Header from "../features/landing/components/layout/Header.jsx";
import Hero from "../features/landing/components/Hero.jsx";
import ProjectsSection from "../features/landing/components/ProjectsSection.jsx";
import ReviewsSection from "../features/landing/components/ReviewsSection.jsx";
import ServicesSection from "../features/landing/components/ServicesSection.jsx";
import Workshop from "../features/landing/components/Workshop.jsx";
import { navigateToContactForm } from "../features/landing/lib/consultationNavigation.js";
import PrivacyPolicy from "../features/legal/components/PrivacyPolicy.jsx";
import TermsAndConditions from "../features/legal/components/TermsAndConditions.jsx";
import { resolveLegalDocument } from "../features/legal/lib/legalNavigation.js";

function openContactForm(event) {
  navigateToContactForm({ event });
}

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [legalDocument, setLegalDocument] = useState(() =>
    resolveLegalDocument(window.location.hash),
  );

  useEffect(() => {
    function updateLegalDocument() {
      setLegalDocument(resolveLegalDocument(window.location.hash));
    }

    window.addEventListener("hashchange", updateLegalDocument);

    return () => window.removeEventListener("hashchange", updateLegalDocument);
  }, []);

  useEffect(() => {
    if (legalDocument) {
      return;
    }

    const sectionId = window.location.hash.slice(1);

    if (sectionId) {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView();
      });
    }
  }, [legalDocument]);

  function consultService(event, serviceName) {
    openContactForm(event);
    setSelectedService(serviceName);
  }

  if (legalDocument === "privacy") {
    return <PrivacyPolicy />;
  }

  if (legalDocument === "terms") {
    return <TermsAndConditions />;
  }

  return (
    <>
      <Header />
      <main aria-label="El tinglado Detailing">
        <Hero />
        <Workshop />
        <ServicesSection onConsult={consultService} />
        <ProjectsSection onContact={openContactForm} />
        <ReviewsSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export default App;
