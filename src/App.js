import logo from "./logo.svg";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideNavBar from "./components/SideNavBar";
import MobileNavBar from "./components/MobileNavBar";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      console.log(isMobile + window.innerWidth);
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
        <div className="display-1 fw-bold">Connor Gilmore,</div>
        <div className="display-4 fw-bold">
          An Entry-Level Software Engineer
        </div>
        <div>&nbsp;</div>
        <div className="line"></div>
        <div>&nbsp;</div>
        <button id="startBTN" className="btn fw-bold btn-lg">
          Begin
        </button>
      </header>
    </div>
  );
}

export default App;
