import React from "react";
import "./paginaInicial.css";
import { Link } from "react-router-dom";

function PaginaInicial() {
  return (
    <div className="paginaInicial">
      <h2 className="titulo">Reaproveche mejor los alimentos -Recetas-</h2>
      <Link to={"/home"}>
        <button className="boton">Home</button>
      </Link>
    </div>
  );
}

export default PaginaInicial;
