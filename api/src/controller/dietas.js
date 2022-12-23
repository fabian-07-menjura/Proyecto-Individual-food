const recetasApi = require("./recetasApi");
const { Dieta } = require("../db.js");

const dietas = async () => {
  const solicitud = await recetasApi();

  var arreglo = [];
  solicitud.forEach((element) => {
    if (element.diets.length) {
      element.diets.forEach((e) => {
        if (!arreglo.includes(e)) {
          arreglo.push(e);
        }
      });
    }
  });
  console.log(arreglo);

  if (arreglo.length) {
    arreglo.map(async (e) => {
      await Dieta.findOrCreate({
        where: { name: e },
        defaults: {
          name: e,
        },
      });
    });
  }
  return arreglo;
};

module.exports = dietas;
