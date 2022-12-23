import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  const ordenar = (e) => {
    let select = e.target;
    let frase = select.options[select.selectedIndex].text;
    if (frase === "Z-A ↓") props.ordenarZA();
    if (frase === "A-Z ↑") props.ordenarAZ();
    if (frase === "health-score ↑") props.puntajeAscendente();
    if (frase === "health-score ↓") props.puntajeDescendente();
  };

  const ordenarPorDiet = (e) => {
    let frase = e.target.name;
    props.ordenarPorDieta(frase);
  };

  return (
    <div className="nav">
      <div className="buscarReceta">
        <div className="divRefresh">
          <Link to={"/home"}>
            <button onClick={props.refresh}>Refresh ↑↓</button>
          </Link>
        </div>
        <label className="labelInput">
          Search
          <input
            type="text"
            onChange={(e) => props.BuscarPorReceta(e.target.value)}
            placeholder="write here..."
          />
        </label>
        <div className="btnAgregar">
          <Link to={"/crearReceta"}>
            <button className="crearReceta">+</button>
          </Link>
        </div>
      </div>

      <div className="selectDieta">
        <button name="Gluten free" onClick={ordenarPorDiet}>
          Gluten free
        </button>
        <button name="Dairy free" onClick={ordenarPorDiet}>
          Dairy free
        </button>
        <button name="Lacto ovo vegetarian" onClick={ordenarPorDiet}>
          Lacto ovo vegetarian
        </button>
        <button name="Vegan" onClick={ordenarPorDiet}>
          Vegan
        </button>
        <button name="Paleolithic" onClick={ordenarPorDiet}>
          Paleolithic
        </button>
        <button name="Primal" onClick={ordenarPorDiet}>
          Primal
        </button>
        <button name="Whole 30" onClick={ordenarPorDiet}>
          Whole 30
        </button>
        <button name="Pescatarian" onClick={ordenarPorDiet}>
          Pescatarian
        </button>
        <button name="Ketogenic" onClick={ordenarPorDiet}>
          Ketogenic
        </button>
        <button name="Fodmap friendly" onClick={ordenarPorDiet}>
          Fodmap friendly
        </button>
      </div>
      {props.info.length ? (
        <label className="selectOrden">
          <select onChange={(e) => ordenar(e)}>
            <option value="">Select an Order</option>
            <option value="">Z-A ↓</option>
            <option value="">A-Z ↑</option>
            <option value="">health-score ↑</option>
            <option value="">health-score ↓</option>
          </select>
        </label>
      ) : (
        ""
      )}

      {/* <label className="selectOrden">
          Filter by Diets
          <select onChange={(e) => ordenarPorDiet(e)}>
            <option value="">Select an option</option>
            {info.map((e) => (
              <option value="">{e}</option>
            ))}
          </select>
        </label> */}
    </div>
  );
}

export default Nav;
