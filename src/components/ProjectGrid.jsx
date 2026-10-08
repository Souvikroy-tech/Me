import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="projects section" id="work">
      <div className="section-heading reveal">
        <div>
          <span className="section-number">02</span>
          <p>SELECTED WORK</p>
        </div>

        <h2>
          PROJECT
          <br />
          <span>ARCHIVE</span>
        </h2>

        <div className="heading-info">
          <span>04 PROJECTS</span>
          <span>2024 — 2026</span>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}