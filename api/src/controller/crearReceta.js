const { Receta, Dieta } = require("../db.js");

const crearReceta = async (
  name,
  summary,
  health_score,
  steps,
  diets,
  dishtypes
) => {
  let dietas = [];
  let arregloDietas = diets.split(", ");
  console.log(arregloDietas);
  await arregloDietas.forEach(async (e) => {
    let solicitud = await Dieta.findOne({
      where: { name: e },
    });
    console.log(solicitud.id);
    dietas.push(solicitud.id);

    if (dietas.length === arregloDietas.length) {
      let [objReceta, created] = await Receta.findOrCreate({
        where: { name },
        defaults: {
          name,
          summary,
          health_score,
          steps,
          dishtypes,
          image:
            "https://img.freepik.com/foto-gratis/cuaderno-receta-tomate-farfalle-ajo-cebolla-mortero-pimienta-vista-superior-copia-espacio_141793-3458.jpg?w=360",
        },
      });
      if (created) {
        console.log(objReceta);
        await objReceta.addDieta(dietas);
      }
    }
  });
  return "receta añadida";
};

module.exports = crearReceta;
