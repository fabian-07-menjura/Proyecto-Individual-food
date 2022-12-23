import React from "react";
import { Link } from "react-router-dom";
import "./recetaRegistrada.css";

function RecetaRegistrada() {
  return (
    <div class="registroCompletado">
      <span class="iconoRegistroCompletado"></span>
      <h1 class="textoRegistroCompletado">¡Successfully Registered Recipe!</h1>
      <Link to={"/home"}>
        <button className="btnVerRazas">Go home</button>
      </Link>
    </div>
  );
}

export default RecetaRegistrada;
