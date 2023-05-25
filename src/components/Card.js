import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Card.css";

function Card({ Desc, Image, Link }) {
  return (
    <div className="project">
      <div className="card">
        <a href={Link} target="_blank">
          <img src={Image} className="card-img-top" alt="project" />
        </a>
        <div className="card-body">
          <p className="card-text">*(click above to navigate to site)</p>
        </div>
      </div>
      <div className="desc">{Desc}</div>
    </div>
  );
}
export default Card;
