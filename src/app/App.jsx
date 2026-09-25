import Header from '../features/landing/components/Header.jsx'
import Hero from '../features/landing/components/Hero.jsx'
import ReviewsSection from '../features/landing/components/ReviewsSection.jsx'
import ServicesSection from '../features/landing/components/ServicesSection.jsx'
import Workshop from '../features/landing/components/Workshop.jsx'

function App() {
  return (
    <>
      <Header />
      <main aria-label="El tinglado Detailing">
        <Hero />
        <Workshop />
        <ServicesSection onConsult={() => {}} />
        <ReviewsSection />
      </main>
    </>
  )
}

export default App
