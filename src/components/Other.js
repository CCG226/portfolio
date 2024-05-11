import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Other.css";
function Other() {
  return (
    <div className="expPage">
      <div className="display-3 fw-bold">Other</div>
      <div>&nbsp;</div>
      <div className="line"></div>
      <div>&nbsp;</div>

      <ul className="text-center fs-5">
        <li>- TEALS Volunteer</li>
        <br />
        <li>
          - 1st Place STL | Hack (UMSL/St.Louis Hackathon)
          <ul>
            <li>
              Project:&nbsp;
              <a
                target="_blank"
                href="https://github.com/CCG226/Dollar-Trail-Adventures"
              >
                Dollar Trail Adventures
              </a>
            </li>
          </ul>
        </li>
        <br />
        <li>
          - 2nd Place TigerHacks (University Of Missouri Hackathon)
          <ul>
            <li>
              Project:&nbsp;
              <a target="_blank" href="https://devpost.com/software/replay">
                Replay
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Other;
