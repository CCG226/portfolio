import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/MobileNav.css";
import Logo from "./Logo";
function MobileNavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Logo height={"5em"} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              id="tab"
              className="nav-link fs-4 fw-bold text-light"
              href="#about"
            >
              About
            </a>
            <a
              id="tab"
              className="nav-link fs-4 fw-bold  text-light"
              href="#projects"
            >
              Projects
            </a>
            <a
              id="tab"
              className="nav-link fs-4 fw-bold  text-light"
              href="#education"
            >
              Education
            </a>
            <a
              id="tab"
              className="nav-link fs-4 fw-bold  text-light"
              href="#experience"
            >
              Experience
            </a>
            <a
              id="tab"
              className="nav-link fs-4 fw-bold  text-light"
              href="#contacts"
            >
              Contact & Info
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavBar;
