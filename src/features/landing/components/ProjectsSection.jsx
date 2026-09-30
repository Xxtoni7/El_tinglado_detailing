import { featuredProjects, galleryProjects, motorcycleProject, wheelProject } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import Container from "../../../shared/ui/Container.jsx";
import SectionHeading from "../../../shared/ui/SectionHeading.jsx";
import BeforeAfterPair from "./BeforeAfterPair.jsx";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectTile from "./ProjectTile.jsx";

function ProjectsSection({ onContact }) {
  const { ref: headingRef, isVisible: isHeadingVisible } = useReveal();
  const { ref: ctaRef, isVisible: isCtaVisible } = useReveal();

  return (
    <section className="bg-warm py-[clamp(4rem,8vw,7rem)]" id="trabajos">
      <Container>
        <div
          className={`reveal ${isHeadingVisible ? "reveal-visible" : ""}`}
          ref={headingRef}
        >
          <SectionHeading
            eyebrow="Trabajos realizados"
            eyebrowId="trabajos-eyebrow"
            title="Resultados que hablan por sí solos"
            description="Conocé algunos de los vehículos que pasaron por nuestro taller y el nivel de detalle aplicado en cada trabajo."
          />
        </div>
        <div className="mt-14 max-md:mt-10">
          <FeaturedProject onContact={onContact} projects={featuredProjects} />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {galleryProjects.map((project, index) => (
              <ProjectTile
                className={index === 2 ? "col-span-2 md:col-span-1" : ""}
                key={project.id}
                project={project}
                revealDelay={index < 2 ? 0 : 120}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-start">
            <ProjectTile
              className="md:col-span-7"
              imageClassName="aspect-16/9"
              project={motorcycleProject}
            />
            <div className="md:col-span-5">
              <BeforeAfterPair project={wheelProject} />
            </div>
          </div>
          <div
            className={`reveal mt-14 text-center max-md:mt-10 ${
              isCtaVisible ? "reveal-visible" : ""
            }`}
            ref={ctaRef}
          >
            <p className="font-heading text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-navy">
              El próximo resultado puede ser el de tu vehículo.
            </p>
            <a
              className="mt-5 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-lime-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy"
              href="#consulta"
              onClick={onContact}
            >
              Consultar por mi vehículo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
