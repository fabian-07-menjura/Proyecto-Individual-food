const axios = require("axios");
const { KEY } = process.env;

let recetasApi = () => {
  let info = axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`
    )
    .then((solicitud) => solicitud.data.results)

    .catch((err) => "Error al solicitar info de la api " + err);

  return info;
};

module.exports = recetasApi;
