import logo from "./logo.svg";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideNavBar from "./components/SideNavBar";
import MobileNavBar from "./components/MobileNavBar";
import Heading from "./components/Heading";
import About from "./components/About";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
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
      <header className="App-header">
        <Heading />
      </header>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
