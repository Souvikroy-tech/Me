import { experiments } from "../data/portfolio";

export default function Experiments() {
  return (
    <section className="experiments section">
      <div className="section-heading reveal">
        <div>
          <span className="section-number">05</span>
          <p>LAB / EXPERIMENTS</p>
        </div>

        <h2>
          TESTING
          <br />
          <span>IDEAS.</span>
        </h2>
      </div>

      <div className="experiment-list">
        {experiments.map((experiment, index) => (
          <div
            className="experiment reveal"
            key={experiment.title}
          >
            <div className="experiment-number">
              0{index + 1}
            </div>

            <div className="experiment-title">
              {experiment.title}
            </div>

            <p>{experiment.text}</p>

            <div className="experiment-symbol">
              +
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}