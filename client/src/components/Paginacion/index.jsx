import React from "react";
import { useState } from "react";
import "./paginacion.css";

export default function Paginacion(props) {
  const siguiente = () => {
    if (props.pagina < props.numPaginas) {
      props.setPagina(props.pagina + 1);
    }
  };
  const anterior = () => {
    if (props.pagina > 1) {
      props.setPagina(props.pagina - 1);
    }
  };

  return (
    <div className="containerPaginacion">
      <button
        disabled={props.pagina === 1}
        className="btnPaginacion"
        onClick={anterior}
      >
        Previous
      </button>
      <p>{props.pagina}</p>
      <p>de {props.numPaginas}</p>
      <button
        disabled={props.pagina === props.numPaginas}
        className="btnPaginacion"
        onClick={siguiente}
      >
        Next
      </button>
    </div>
  );
}
