export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label reveal">
        <span>03</span>
        <span>ABOUT / PROFILE</span>
      </div>

      <div className="about-layout">
        <div className="about-title reveal">
          <h2>
            BUILDING
            <br />
            <span>USEFUL</span>
            <br />
            THINGS.
          </h2>
        </div>

        <div className="about-content reveal">
          <p className="large-text">
            I'm a BCA(H) student and full-stack developer
            interested in building useful, expressive and
            technically strong digital products.
          </p>

          <p>
            My work combines frontend development,
            backend engineering and interaction design.
            I enjoy turning ideas into functional web
            experiences.
          </p>

          <div className="about-details">
            <div>
              <span>BASED IN</span>
              <strong>WEST BENGAL,INDIA</strong>
            </div>

            <div>
              <span>EDUCATION</span>
              <strong>BCA(H)</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>WEB / SOFTWARE</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}