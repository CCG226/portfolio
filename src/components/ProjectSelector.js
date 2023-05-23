import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/ProjectSelector.css";
import React from "react";
import { useState } from "react";
function ProjectSelector() {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedButtonIcon, setSelectedButtonIcon] = useState(
    "material-symbols-outlined"
  );
  const handleClick = (btnNumber) => {
    setSelectedButton(btnNumber);
  };

  return (
    <div className="selectorList">
      <button
        className={selectedButton === "btn1" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("btn1")}
      >
        JournalWit{" "}
        <span
          className={
            selectedButton === "btn1"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          star
        </span>
      </button>
      <button
        className={selectedButton === "btn2" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("btn2")}
      >
        GradeHelp{" "}
        <span
          className={
            selectedButton === "btn2"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          star
        </span>
      </button>
      <button
        className={selectedButton === "btn3" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("btn3")}
      >
        MyAiAid{" "}
        <span
          className={
            selectedButton === "btn3"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          star
        </span>
      </button>
      <button
        className={selectedButton === "btn4" ? "selected" : "unselected"}
        type="button"
        onClick={() => handleClick("btn4")}
      >
        Portfolio{" "}
        <span
          className={
            selectedButton === "btn4"
              ? "material-symbols-outlined highlight"
              : "material-symbols-outlined"
          }
        >
          star
        </span>
      </button>
    </div>
  );
}
export default ProjectSelector;
