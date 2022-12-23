import React from "react";
import "./lista.css";

function Lista(props) {
  return (
    <div className="containerFrase">
      <button
        className="botonContainer"
        name={props.dieta}
        onClick={(e) => props.eliminarDieta(e)}
      >
        x
      </button>
      <p className="fraseContainer">{props.dieta}</p>
    </div>
  );
}

export default Lista;
