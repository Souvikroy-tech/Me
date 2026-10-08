export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="terminal reveal">
        <div className="terminal-top">
          <span>TERMINAL</span>
          <span>CONNECTION / READY</span>
        </div>

        <div className="terminal-body">
          <div className="terminal-line">
            <span>&gt;</span>
            <span>INITIALIZING CONTACT...</span>
          </div>

          <div className="terminal-line">
            <span>&gt;</span>
            <span>STATUS: AVAILABLE</span>
          </div>

          <div className="terminal-line">
            <span>&gt;</span>
            <span>WAITING FOR MESSAGE_</span>
          </div>

          <a
            className="email-link"
            href="fakemaildonttrytofoundme@example.com"
          >
            Dontgiveanyone@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-heading reveal">
        <p>HAVE A PROJECT?</p>

        <h2>
          LET'S
          <br />
          <span>BUILD.</span>
        </h2>
      </div>

      <footer>
        <span>©dev Souvik-Roy-Tech</span>

        <div>
          <a
            href="https://dontgiveyougithub.com/"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>

          <a
            href="https://dontgiveyoulinkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </section>
  );
}