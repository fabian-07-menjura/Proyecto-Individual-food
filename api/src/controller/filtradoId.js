const listarRecetas = require("./listarRecetas.js");

const filtradoId = async (id) => {
  let solicitud = await listarRecetas();
  let filtrado = solicitud.filter((e) => e.id == id);
  console.log(filtrado);
  if (filtrado.length) return filtrado;
  throw Error("id inexistente");
};

module.exports = filtradoId;
