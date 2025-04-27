import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideNavBar from "./components/SideNavBar";
import MobileNavBar from "./components/MobileNavBar";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import React from "react";
import { useState, useEffect } from "react";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Other from "./components/Other";
function App() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 1300) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      {isMobile ? <MobileNavBar /> : <SideNavBar />}
      <section className="App-header">
        <Heading />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="other">
        <Other />
      </section>
      <section id="contacts">
        <Contacts />
      </section>

      <section id="end"></section>
    </div>
  );
}

export default App;
