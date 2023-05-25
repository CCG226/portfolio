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
        <div class="d-flex justify-content-center">
          <p id="aboutMe" className="text-center fs-5">
            I am a growing software engineer who loves to design and build
            software applications. I thoroughly enjoy the creative processes
            behind planning out to transfer ideas into a software applications
            and I especially enjoy the development processes of writing the code
            to build and optimize the software solution. I'm proficient with
            most common programming languages, but I specialize in building
            applications in C# as I have a strong knowledge foundation in C# as
            I have the most experience with the language and its frameworks.
          </p>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div className="display-3 fw-bold">Skills</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <div className="wrapperRIGHT">
        <p id="mySkills" className="text-center fs-2">
          Bootstrap <div className="d-inline seperator">|</div> Javascript{" "}
          <div className="d-inline seperator">|</div> CSS{" "}
          <div className="d-inline seperator">|</div> React{" "}
          <div className="d-inline seperator">|</div> SQL{" "}
          <div className="d-inline seperator">|</div> Java
          <div className="d-inline seperator">|</div> C#{" "}
          <div className="d-inline seperator">|</div> C++
        </p>
      </div>
    </div>
  );
}
export default About;
