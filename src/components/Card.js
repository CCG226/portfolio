import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Card.css";

function Card({ Desc, Image }) {
  return (
    <div className="card">
      <img src={Image} className="card-img-top" alt="project" />
      <div className="card-body">
        <p className="card-text">{Desc}</p>
      </div>
    </div>
  );
}
export default Card;
