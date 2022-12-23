export const SOLICITAR_RECETAS = "SOLICITAR_RECETAS";
export const ORDENAR_ZA = "ORDENAR_ZA";
export const ORDENAR_AZ = "ORDENAR_AZ";
export const ORDENAR_PUNTAJE_ASCENDENTE = "ORDENAR_PUNTAJE_ASCENDENTE";
export const ORDENAR_PUNTAJE_DESCENDENTE = "ORDENAR_PUNTAJE_DESCENDENTE";
export const SOLICITAR_DIETAS = "SOLICITAR_DIETAS";
export const SOLICITAR_DETALLES = "SOLICITAR_DETALLES";
export const VACIAR_ESTADO_DETALLES = "VACIAR_ESTADO_DETALLES";

/*-------------------------------------------------------------------*/

export const solicitarRecetas = () => {
  return async function (dispatch) {
    await fetch("http://localhost:3001/recetas")
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RECETAS,
          payload: respuesta1,
        })
      )
      .catch((err) =>
        console.log("error al solicitar recetas de la api ", err.message)
      );
  };
};

export const buscarPorReceta = (data) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/recipes?name=${data}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RECETAS,
          payload: respuesta1,
        })
      )
      .catch((err) =>
        console.log("error al solicitar receta de la api ", err.message)
      );
  };
};
export const solicitarDietas = () => {
  return async function (dispatch) {
    fetch("http://localhost:3001/diets")
      .then((respuesta) => respuesta.json())
      .then((respuesta1) => {
        dispatch({
          type: SOLICITAR_DIETAS,
          payload: respuesta1,
        });
      })
      .catch((err) => console.log("error al solicitar dietas", err.message));
  };
};

export const filtrarPorDieta = (data) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/filtrarDiets?name=${data}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RECETAS,
          payload: respuesta1,
        })
      )
      .catch((err) =>
        console.log("error al solicitar razas de la api ", err.message)
      );
  };
};

export const solicitarDetalles = (id) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/recipes/${id}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_DETALLES,
          payload: respuesta1[0],
        })
      )
      .catch((err) =>
        console.log("error al solicitar detalles de la api ", err.message)
      );
  };
};

export const vaciarDetalles = () => {
  return function (dispatch) {
    dispatch({
      type: VACIAR_ESTADO_DETALLES,
      payload: {},
    });
  };
};
