import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-visual">
        <div className="visual-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="visual-center">
          <span>{project.number}</span>
        </div>

        <div className="visual-cross cross-one">+</div>
        <div className="visual-cross cross-two">+</div>
      </div>

      <div className="project-info">
        <div>
          <p className="project-category">
            {project.category}
          </p>

          <h3>{project.title}</h3>
        </div>

        <div className="project-meta">
          <span>{project.year}</span>
          <span>VIEW ↗</span>
        </div>
      </div>

      <div className="project-stack">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="card-arrow">
        {hovered ? "↗" : "→"}
      </div>
    </article>
  );
}