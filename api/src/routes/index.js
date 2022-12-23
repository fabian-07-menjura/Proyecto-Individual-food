const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const listarRecetas = require("../controller/listarRecetas.js");
const crearReceta = require("../controller/crearReceta.js");
const dietas = require("../controller/dietas.js");
const filtradoId = require("../controller/filtradoId.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//  traer todas las recetas
router.get("/recetas", async (req, res) => {
  try {
    let solicitud = await listarRecetas();
    res.status(200).send(solicitud);
  } catch (error) {
    res.status(400).send(error);
  }
});

//  filtrado por nombre de la receta
router.get("/recipes", async (req, res) => {
  try {
    let { name } = req.query;
    let solicitud = await listarRecetas();
    let filtrado = solicitud.filter((e) =>
      e.name.toLowerCase().includes(`${name.toLowerCase()}`)
    );
    res.status(200).send(filtrado);
  } catch (error) {
    res.status(400).send(error);
  }
});
// ---------------traer po Id------------------
router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let solicitud = await filtradoId(id);
    res.status(200).send(solicitud);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ----------------crear nueva receta----------------
router.post("/recipes", async (req, res) => {
  const { name, summary, health_score, steps, diets, dishtypes } = req.body;
  try {
    let solicitud = await crearReceta(
      name,
      summary,
      health_score,
      steps,
      diets,
      dishtypes
    );
    res.status(200).send(solicitud);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// ----------------guardar dietas en DB y devolverlas------------
router.get("/diets", async (req, res) => {
  try {
    let solicitud = await dietas();
    res.status(200).send(solicitud);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/filtrarDiets", async (req, res) => {
  let { name } = req.query;
  try {
    let solicitud = await listarRecetas();
    let busqueda = solicitud.filter((e) => {
      if (typeof e.diets === "string") {
        return e.diets.toLowerCase().includes(`${name.toLowerCase()}`);
      }
    });
    res.send(busqueda);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

/// https://api.spoonacular.com/recipes/complexSearch?apiKey=4d05815889234c7b82386848b5fc0c06 ----> enlase de apikey
