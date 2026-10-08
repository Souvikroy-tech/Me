import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="skills section">
      <div className="section-label reveal">
        <span>04</span>
        <span>SYSTEM / CAPABILITIES</span>
      </div>

      <div className="skills-layout">
        <div className="skills-intro reveal">
          <p>TECH STACK</p>

          <h2>
            TOOLS
            <br />
            <span>I USE.</span>
          </h2>
        </div>

        <div className="skills-grid reveal">
          {skills.map((skill, index) => (
            <div className="skill" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}