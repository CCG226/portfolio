import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/ProjectSelector.css";
import React from "react";
import { useState } from "react";
function ProjectSelector({ func }) {
  const [selectedButton, setSelectedButton] = useState("0");

  const handleClick = (btnNumber) => {
    setSelectedButton(btnNumber);
    func(btnNumber);
  };

  return (
    <div className="selectorList">
      <button
        className={selectedButton === "0" ? "selected" : "unselected"}
        onClick={() => handleClick("0")}
      >
        JournalWit (2023)
        <span
          className={
            selectedButton === "0"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          auto_stories
        </span>
      </button>
      <button
        className={selectedButton === "1" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("1")}
      >
        GradeHelp (2022)
        <span
          className={
            selectedButton === "1"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          school
        </span>
      </button>
      <button
        className={selectedButton === "2" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("2")}
      >
        MyAiAid (2023)
        <span
          className={
            selectedButton === "2"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          robot
        </span>
      </button>
      <button
        className={selectedButton === "3" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("3")}
      >
        Portfolio (2023)
        <span
          className={
            selectedButton === "3"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          person_pin
        </span>
      </button>
    </div>
  );
}
export default ProjectSelector;
