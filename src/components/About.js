import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/About.css";
function About() {
  return (
    <div>
      <div className="display-3 fw-bold">About</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <div className="wrapper">
        <div className="d-flex justify-content-center">
          <p id="aboutMe" className="text-center fs-5">
            I am a software enthusiast who simply enjoys creating applications,
            brainstorming solutions to problems, learning new things, and
            embracing challenges!
          </p>
        </div>
      </div>

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div className="display-5 fw-bold">Skills</div>
      <div>&nbsp;</div>

      <div>&nbsp;</div>
      <div className="wrapperRIGHT">
        <p id="mySkills" className="text-center fs-2">
          XAML <div className="d-inline seperator">|</div> Javascript{" "}
          <div className="d-inline seperator">|</div> CSS{" "}
          <div className="d-inline seperator">|</div> React{" "}
          <div className="d-inline seperator">|</div> SQL{" "}
          <div className="d-inline seperator">|</div> Java{" "}
          <div className="d-inline seperator">|</div> C#{" "}
          <div className="d-inline seperator">|</div> C++
        </p>
      </div>
    </div>
  );
}
export default About;
