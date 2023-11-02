import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Contacts.css";
import githubIcon from "../Images/github.png";
function Contacts() {
  return (
    <div className="contactPage">
      <div className="display-3 fw-bold">Contacts</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <ul>
        <li className="fs-5 text-start">
          <div className="fs-3 d-inline">
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>{" "}
          cown877@gmail.com
        </li>
        <li className="fs-5 text-start">
          {" "}
          <div className="fs-3 d-inline">Phone Number:&nbsp;</div> 573-489-6202
        </li>
      </ul>
      <div className="d-flex justify-content-evenly">
        <a href="https://github.com/CCG226" target="_blank">
          <img class="icon" src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
}
export default Contacts;
