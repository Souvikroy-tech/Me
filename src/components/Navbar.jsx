export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="logo">
        SR<span></span>
      </div>

      <nav>
        <button onClick={() => scrollTo("work")}>
          WORK
        </button>

        <button onClick={() => scrollTo("about")}>
          ABOUT
        </button>

        <button onClick={() => scrollTo("education")}>
          EDUCATION
        </button>

        <button onClick={() => scrollTo("contact")}>
          CONTACT
        </button>
      </nav>

      <div className="nav-status">
        <span />
        AVAILABLE
      </div>
    </header>
  );
}