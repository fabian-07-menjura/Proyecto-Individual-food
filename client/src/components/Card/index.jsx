import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <h1>{props.name}</h1>
      </div>
      <Link to={`/detalle/${props.id}`}>
        <div className="divImagen ">
          <img
            className="imgDog linkDetalle"
            src={props.imagen}
            alt="imagen de receta"
          />
        </div>
      </Link>
      <h4>*Diets</h4>
      <p>{props.dietas ? props.dietas : ""}</p>
      <h4>*Health-score</h4>
      <p>{props.health_score}</p>
    </div>
  );
}

export default Card;
