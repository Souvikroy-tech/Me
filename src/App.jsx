import { useEffect } from "react";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experiments from "./components/Experiments";
import Contact from "./components/Contact";
import FloatingDock from "./components/FloatingDock";

function App() {
  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />

      <div className="noise" />

      <Navbar />

      <main>
        <Hero />

        <ProjectGrid />

        <About />

        <Education />

        <Skills />

        <Experiments />

        <Contact />
      </main>

      <FloatingDock />
    </>
  );
}

export default App;