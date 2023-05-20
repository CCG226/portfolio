import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/MobileNav.css";
import Logo from "./logo";
function MobileNavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Logo height={"5em"} />
        </a>
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
            <a className="nav-link fs-1 text-light" href="#">
              Test
            </a>
            <a className="nav-link fs-1 text-light" href="#">
              Test
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavBar;
