import "./Card.css";
import { Link } from "react-router-dom";

function Card({ titulo = "titulo", descripcion = "descripcion", nombre = "nombre"}) {
  return (
    <div className="Card">
      <Link to={titulo}>
        <h2> {titulo}</h2>
        <h2>{nombre}</h2>
      </Link>
      <p> {descripcion}</p>
    </div>
  );
}

export default Card;
