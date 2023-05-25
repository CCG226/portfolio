import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Projects.css";
import ProjectSelector from "./ProjectSelector";
import Card from "./Card";
import { FindProject } from "../content/ProjectBuilder";
import { useState } from "react";
function Projects() {
  const [CardDesc, setCardDesc] = useState(FindProject(0).desc);
  const [CardImg, setCardImg] = useState(FindProject(0).image);
  const [CardLink, setCardLink] = useState(FindProject(0).link);
  const swapProjectCard = (i) => {
    console.log(i);
    const selectedProject = FindProject(i);
    console.log(selectedProject);
    setCardDesc(selectedProject.desc);
    setCardImg(selectedProject.image);
    setCardLink(selectedProject.link);
  };
  return (
    <div className="content">
      <div className="display-3 fw-bold">Projects</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

      <div className="container">
        <ProjectSelector func={(param) => swapProjectCard(param)} />
      </div>

      <Card Desc={CardDesc} Image={CardImg} Link={CardLink} />
    </div>
  );
}
export default Projects;
