export default function Education() {
  const education = [
    {
      number: "01",
      period: "EARLY EDUCATION",
      title: "Primary School",
      school: "RAJA RAMMOHON CHILDRENS HAPPY HOME,HALDIBARI,COOCH BEHAR",
      detail: "Nursery & Primary Education",
      status: "COMPLETED",
    },

    {
      number: "02",
      period: "SECONDARY",
      title: "Secondary Education",
      school: "HALDIBARI HIGH SCHOOL,HALDIBARI,COOCHBEHAR",
      detail: "WBBSE",
      status: "COMPLETED",
    },

    {
      number: "03",
      period: "HIGHER SECONDARY",
      title: "Higher Secondary Education",
      school: "HALDIBARI HIGH SCHOOL,HALDIBARI,COOCHBEHAR",
      detail: "WBCHSE",
      status: "COMPLETED",
    },

    {
      number: "04",
      period: "UNDERGRADUATE",
      title: "Bachelor of Computer Applications(H)",
      school: "Techno India University",
      detail: "BCA(H)",
      result: "CURRENT",
      status: "IN PROGRESS",
    },
  ];

  return (
    <section
      className="education section"
      id="education"
    >
      <div className="section-label reveal">
        <span>04</span>

        <span>
          EDUCATION / ACADEMIC JOURNEY
        </span>
      </div>

      <div className="education-header reveal">
        <div>
          <p className="education-small-title">
            ACADEMIC RECORD
          </p>

          <h2>
            LEARNING
            <br />
            <span>PATH.</span>
          </h2>
        </div>

        <p className="education-intro">
          A journey from early education to computer
          applications, building the foundation for my
          career in technology and software development.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((item) => (
          <article
            className="education-item reveal"
            key={item.number}
          >
            <div className="education-number">
              {item.number}
            </div>

            <div className="education-period">
              {item.period}
            </div>

            <div className="education-main">
              <h3>{item.title}</h3>

              <p className="education-school">
                {item.school}
              </p>

              <span className="education-detail">
                {item.detail}
              </span>
            </div>

            <div className="education-result">
              {item.result}
            </div>

            <div className="education-status">
              <span />
              {item.status}
            </div>
          </article>
        ))}
      </div>

      <div className="education-footer reveal">
        <span>ACADEMIC JOURNEY</span>

        <span>04 STAGES</span>
      </div>
    </section>
  );
}