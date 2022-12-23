import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions";
import Lista from "../Lista";
import "./crearReceta.css";
import { useHistory } from "react-router-dom";

function CrearReceta() {
  let ruta = useHistory();
  console.log(ruta);
  let [obj, setObj] = useState({
    name: "",
    summary: "",
    health_score: "",
    steps: "",
    dishtypes: "",
    diets: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "VACIAR_ESTADO_INFO", payload: [] });
    dispatch(actions.solicitarDietas());
  }, []);
  let info = useSelector((state) => state.dietas);
  // console.log(obj);

  const validateName = /^[A-Za-z][a-z\s+]+$/;
  const validarDishTypes = /^[A-Za-z][a-z,\s+]+$/;
  const validarText = /^[A-Za-z][a-z,\s+\d.]+$/;

  const verificarInputs = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      if (e.target.value.length && e.target.value.match(validateName)) {
        e.target.setCustomValidity("");
        setObj({ ...obj, name: e.target.value });
        console.log(obj);
      } else {
        e.target.setCustomValidity(
          "Escribe un nombre para tu receta - debe ser una frase corta y consisa, No incluir caracteres especiales ni numericos"
        );
      }
    }

    if (e.target.name === "dishtypes") {
      if (e.target.value.length && e.target.value.match(validarDishTypes)) {
        e.target.setCustomValidity("");
        setObj({ ...obj, dishtypes: e.target.value });
        console.log(obj);
      } else {
        e.target.setCustomValidity(
          "Escribe el tipo de plato - si tu plato tiene varios nombres separalos por , y un espacio  Ejemplo: lunch, main dish, side dish,  ... No incluir caracteres especiales"
        );
      }
    }

    if (e.target.name === "health_score") {
      if (e.target.value > 0 && e.target.value <= 100) {
        e.target.setCustomValidity("");
        setObj({ ...obj, health_score: e.target.value });
        console.log(obj);
      } else {
        e.target.setCustomValidity(
          "El puntaje que le des a tu receta debe estar en un rango de 1 a 100"
        );
      }
    }

    if (e.target.name === "summary" || e.target.name === "steps") {
      if (e.target.value.length < 500 && e.target.value.match(validarText)) {
        e.target.setCustomValidity("");
        setObj({ ...obj, [e.target.name]: e.target.value });
        console.log(obj);
      } else {
        e.target.setCustomValidity(
          "El texto no debe ser mayor a 500 caracteres, no debe incluir caracteres especiales"
        );
      }
    }
  };

  const añadirDieta = (e) => {
    e.preventDefault();
    let select = e.target;
    let frase = select.options[select.selectedIndex].text;
    if (!obj.diets.includes(frase)) {
      setObj({ ...obj, diets: [...obj.diets, frase] });
      console.log(obj);
    }
  };

  let eliminarDieta = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    let nuevaInfo1 = obj.diets;
    let nuevaInfo = nuevaInfo1.filter((elem) => elem !== e.target.name);
    console.log(nuevaInfo);
    setObj({ ...obj, diets: [...nuevaInfo] });
    console.log(obj);
  };

  let añadirReceta = (e) => {
    e.preventDefault();
    if (obj.diets.length) {
      let dietas = obj.diets.join(", ");
      console.log(dietas);
      return fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: obj.name,
          summary: obj.summary,
          health_score: obj.health_score,
          steps: obj.steps,
          dishtypes: obj.dishtypes,
          diets: dietas,
        }),
      })
        .then((res) => ruta.push("/recetaRegistrada"))
        .catch((err) => alert(err.message));
    }
    return alert("debes ingresar minimo una dieta");
  };

  return (
    <div>
      <section className="sectionFormulario">
        <h1 className="tituloFormulario">Nueva Receta</h1>
        <form action="" autocomplete="off" onSubmit={(e) => añadirReceta(e)}>
          <div className="container_inputs">
            <div className="input-container">
              <input
                className="input"
                type="string"
                placeholder="Name"
                required
                name="name"
                onChange={(e) => verificarInputs(e)}
                onBlur={(e) => verificarInputs(e)}
              />
              <label htmlFor="name" className="nombre">
                Name
              </label>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="DishTypes"
                required
                name="dishtypes"
                onChange={(e) => verificarInputs(e)}
                onBlur={(e) => verificarInputs(e)}
              />
              <label className="nombre" htmlFor="dishtypes">
                DishTypes
              </label>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="number"
                placeholder="Health Score"
                required
                name="health_score"
                onChange={(e) => verificarInputs(e)}
                onBlur={(e) => verificarInputs(e)}
              />
              <label className="nombre" htmlFor="health_score">
                Health Score
              </label>
            </div>

            <div className="input-container textarea">
              <textarea
                type=""
                placeholder="Steps"
                required
                name="summary"
                className="descriptionFormulario"
                onChange={(e) => verificarInputs(e)}
                onBlur={(e) => verificarInputs(e)}
              ></textarea>
              <label className="nombre" htmlFor="summary">
                Summary
              </label>
            </div>

            <div className="input-container textarea">
              <textarea
                className="descriptionFormulario"
                type=""
                placeholder="Steps"
                required
                name="steps"
                onChange={(e) => verificarInputs(e)}
                onBlur={(e) => verificarInputs(e)}
              ></textarea>
              <label className="nombre" htmlFor="steps">
                Steps
              </label>
            </div>
            <div className="input-container">
              <select
                className="selectDiets"
                onChange={(e) => añadirDieta(e)}
                name=""
                id=""
              >
                <option value="">Select diets</option>
                {info.map((e) => (
                  <option value="">{e}</option>
                ))}
              </select>
              <div className="contenedorDiets">
                {obj.diets.map((e) => (
                  <Lista dieta={e} eliminarDieta={eliminarDieta} />
                ))}
              </div>
            </div>
          </div>
          <div className="divBtn">
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CrearReceta;
