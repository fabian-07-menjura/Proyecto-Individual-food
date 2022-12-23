const axios = require("axios");
const { Receta, Dieta } = require("../db.js");
const recetasApi = require("./recetasApi.js");

let listarRecetas = async () => {
  let info = await recetasApi();

  // // -----------------solicitud apk----------------
  let apk = [];
  info.map((e) => {
    let pasos = [];
    if (e.analyzedInstructions.length) {
      // console.log(e.analyzedInstructions[0].steps);
      e.analyzedInstructions[0].steps.map((element) => {
        pasos.push(element.step);
      });
    }
    apk.push({
      id: e.id,
      name: e.title,
      summary: e.summary,
      health_score: e.healthScore,
      steps: pasos.join(", "),
      dishtypes: e.dishTypes.join(", "),
      diets: e.diets.join(", "),
      image: e.image,
    });
  });

  // -----------solicitud db------------------------
  let solicitudDb = await Receta.findAll({
    include: Dieta,
  });
  console.log(solicitudDb);
  let db = [];
  solicitudDb.forEach((e) => {
    let dietas = [];
    e.dieta.length && e.dieta.map((e) => dietas.push(e.name));

    db.push({
      id: e.id,
      name: e.name,
      summary: e.summary,
      health_score: e.health_score,
      steps: e.steps,
      diets: dietas.join(", "),
      dishtypes: e.dishtypes,
      image: e.image,
    });
  });

  if (db.length) {
    return [...apk, ...db];
  } else return apk;
};

module.exports = listarRecetas;
