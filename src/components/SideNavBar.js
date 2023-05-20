import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/SideNav.css";
import Logo from "./logo";
function SideNavBar() {
  return (
    <nav className="collapse d-lg-block sidebar collapse">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a id="logo">
            <Logo height={"9em"} />
          </a>
          <a href="#">Test</a>
        </div>
      </div>
    </nav>
  );
}

export default SideNavBar;
