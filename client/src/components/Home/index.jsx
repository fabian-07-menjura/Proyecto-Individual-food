import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions";
import Card from "../Card";
import Nav from "../Nav";
import Paginacion from "../Paginacion";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const [pagina, setPagina] = useState(1);
  const recetas = 9;

  useEffect(() => {
    dispatch(actions.solicitarRecetas());
  }, []);

  let info = useSelector((state) => state.recetas);
  console.log(info);

  let numPaginas = Math.ceil(info.length / recetas);
  let listRecipes = info.slice(
    (pagina - 1) * recetas,
    (pagina - 1) * recetas + recetas
  );

  const ordenarZA = () => {
    setPagina(1);
    dispatch({ type: "ORDENAR_ZA", payload: info });
  };

  const ordenarAZ = () => {
    setPagina(1);
    dispatch({ type: "ORDENAR_AZ", payload: info });
  };

  function puntajeAscendente() {
    setPagina(1);
    dispatch({ type: "ORDENAR_PUNTAJE_ASCENDENTE", payload: info });
  }

  function puntajeDescendente() {
    setPagina(1);
    dispatch({ type: "ORDENAR_PUNTAJE_DESCENDENTE", payload: info });
  }

  const BuscarPorReceta = (data) => {
    setPagina(1);
    dispatch(actions.buscarPorReceta(data));
  };

  const ordenarPorDieta = (data) => {
    dispatch({ type: "VACIAR_ESTADO_INFO", payload: [] });
    setPagina(1);
    dispatch(actions.filtrarPorDieta(data));
  };

  const refresh = () => {
    dispatch({ type: "VACIAR_ESTADO_INFO", payload: [] });
    dispatch(actions.solicitarRecetas());
  };

  return (
    <div>
      <div className="home">
        <Nav
          ordenarZA={ordenarZA}
          ordenarAZ={ordenarAZ}
          puntajeAscendente={puntajeAscendente}
          puntajeDescendente={puntajeDescendente}
          BuscarPorReceta={BuscarPorReceta}
          ordenarPorDieta={ordenarPorDieta}
          refresh={refresh}
          info={info}
        />
        {info.length ? (
          listRecipes.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              dietas={e.diets}
              imagen={e.image}
              health_score={e.health_score}
            />
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
      {info.length ? (
        <Paginacion
          pagina={pagina}
          setPagina={setPagina}
          numPaginas={numPaginas}
        />
      ) : (
        ""
      )}
      {info.length ? (
        <footer>
          <p>P.I Fabian Menjura</p>
          <p>Estudent of Henry!</p>
          <h5>Email: fabian.menjura.22@gmail.com</h5>
          <p>contac me:</p>{" "}
          <a href="https://www.linkedin.com/in/fabian-menjura-1409ba216/">
            Linkedin
          </a>
          <br />
          <br />
          <a href="https://github.com/fabian-07-menjura">Github</a>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
