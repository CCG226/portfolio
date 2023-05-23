import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Projects.css";
import ProjectSelector from "./ProjectSelector";
import Card from "./Card";
function Projects() {
  return (
    <div>
      <div className="display-3 fw-bold">Projects</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <ProjectSelector />
      <Card/>
    </div>
  );
}
export default Projects;
