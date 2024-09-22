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
          <div className="fs-3 d-inline">Email:&nbsp;</div> cown877@gmail.com
        </li>
      </ul>
    </div>
  );
}
export default Contacts;
