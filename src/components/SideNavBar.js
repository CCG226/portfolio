import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/SideNav.css";
import Logo from "./logo";
function SideNavBar() {
  return (
    <nav className="collapse d-lg-block sidebar collapse">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <div>
            <Logo height={"9em"} />
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <a
            id="tab"
            className="fs-4 fw-bold text-decoration-none mb-3"
            href="#"
          >
            About
          </a>
          <a
            id="tab"
            className="fs-4 fw-bold text-decoration-none mb-3"
            href="#"
          >
            Projects
          </a>
          <a
            id="tab"
            className="fs-4 fw-bold text-decoration-none mb-3"
            href="#"
          >
            Education
          </a>

          <a
            id="tab"
            className="fs-4 fw-bold text-decoration-none mb-3"
            href="#"
          >
            Experience
          </a>

          <a
            id="tab"
            className="fs-4 fw-bold text-decoration-none mb-3"
            href="#"
          >
            Contact & Info
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SideNavBar;
