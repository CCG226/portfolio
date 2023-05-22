import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Heading.css";
function Heading() {
  return (
    <header>
      <div className="display-1 fw-bold">Connor Gilmore,</div>
      <div className="display-4 fw-bold">An Entry-Level Software Engineer</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <button id="startBTN" className="btn fw-bold btn-lg">
        Begin
      </button>
    </header>
  );
}
export default Heading;
