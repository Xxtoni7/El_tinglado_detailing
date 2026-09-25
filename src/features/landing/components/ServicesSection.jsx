import { services } from '../data/services.js'
import Container from '../../../shared/ui/Container.jsx'
import SectionHeading from '../../../shared/ui/SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'

function ServicesSection({ onConsult }) {
  return <section className="relative bg-navy py-[clamp(4rem,8vw,7rem)] before:absolute before:top-0 before:right-0 before:left-0 before:h-px before:bg-[linear-gradient(90deg,transparent,#C8E632,transparent)]" id="servicios"><Container><div className="[&>h2]:text-white [&>p]:text-white/50"><SectionHeading eyebrow="Servicios" title={<>Soluciones profesionales <br />para cada necesidad</>} description="Desde una limpieza profunda hasta la máxima protección. Elegí el servicio ideal para tu vehículo." /></div><div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6 max-lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-md:grid-cols-1">{services.map((service) => <ServiceCard key={service.name} onConsult={onConsult} service={service} />)}</div></Container></section>
}

export default ServicesSection
