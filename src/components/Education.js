import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Education.css";
function Education() {
  return (
    <div className="eduPage">
      <div className="display-3 fw-bold">Education</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>
      <ul className="text-center fs-5">
        <li className="fs-3 text-start">
          <span class="material-symbols-outlined test">workspace_premium</span>{" "}
          BS in Computer Science (Dec 2024)
        </li>
        <div>&nbsp;</div>
        <li className="fs-3 text-start">
          <span class="material-symbols-outlined test">workspace_premium</span>{" "}
          BS in Computer Technology (Dec 2024)
        </li>
        <div>&nbsp;</div>
        <li className="fs-3 text-start">
          <span class="material-symbols-outlined test">workspace_premium</span>{" "}
          Certificate in Internet and Web (Dec 2024)
        </li>
      </ul>
    </div>
  );
}
export default Education;
