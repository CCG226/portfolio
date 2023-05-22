import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Heading.css";
function Heading() {
  return (
    <div>
      <div className="display-1 fw-bold">Connor Gilmore,</div>
      <div className="display-4 fw-bold">An Entry-Level Software Engineer</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <a id="startBTN" href="#about" className="btn fw-bold btn-lg">
        Begin
      </a>
    </div>
  );
}
export default Heading;
