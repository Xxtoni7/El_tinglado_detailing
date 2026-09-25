import { useState } from "react";
import ContactSection from "../features/landing/components/ContactSection.jsx";
import FloatingWhatsapp from "../features/landing/components/FloatingWhatsapp.jsx";
import Footer from "../features/landing/components/Footer.jsx";
import Header from "../features/landing/components/Header.jsx";
import Hero from "../features/landing/components/Hero.jsx";
import ReviewsSection from "../features/landing/components/ReviewsSection.jsx";
import ServicesSection from "../features/landing/components/ServicesSection.jsx";
import Workshop from "../features/landing/components/Workshop.jsx";

function App() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Header />
      <main aria-label="El tinglado Detailing">
        <Hero />
        <Workshop />
        <ServicesSection onConsult={setSelectedService} />
        <ReviewsSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export default App;
