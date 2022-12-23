import {
  SOLICITAR_RECETAS,
  ORDENAR_ZA,
  ORDENAR_AZ,
  ORDENAR_PUNTAJE_ASCENDENTE,
  ORDENAR_PUNTAJE_DESCENDENTE,
  SOLICITAR_DIETAS,
  SOLICITAR_DETALLES,
  VACIAR_ESTADO_DETALLES,
} from "../Actions";

const inicialState = {
  recetas: [],
  detalleReceta: {},
  dietas: [],
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case SOLICITAR_RECETAS:
      return {
        ...state,
        recetas: action.payload,
      };
    case ORDENAR_AZ:
      const orden_az = action.payload.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        recetas: [...orden_az],
      };
    case ORDENAR_ZA:
      const orden_za = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      console.log(orden_za);
      return {
        ...state,
        recetas: [...orden_za],
      };
    case ORDENAR_PUNTAJE_ASCENDENTE:
      const orden_Puntaje_Ascendente = action.payload.sort(function (a, b) {
        return a.health_score - b.health_score;
      });
      return {
        ...state,
        recetas: [...orden_Puntaje_Ascendente],
      };
    case ORDENAR_PUNTAJE_DESCENDENTE:
      const orden_Puntaje_Descendente = action.payload.sort(function (a, b) {
        return b.health_score - a.health_score;
      });
      return {
        ...state,
        recetas: [...orden_Puntaje_Descendente],
      };

    case SOLICITAR_DIETAS:
      return {
        ...state,
        dietas: action.payload,
      };
    case SOLICITAR_DETALLES:
      return {
        ...state,
        detalleReceta: action.payload,
      };

    case VACIAR_ESTADO_DETALLES:
      return {
        ...state,
        detalleReceta: action.payload,
      };
    case "VACIAR_ESTADO_INFO":
      return {
        ...state,
        recetas: action.payload,
      };

    default:
      return { ...state };
  }
}
export default rootReducer;
