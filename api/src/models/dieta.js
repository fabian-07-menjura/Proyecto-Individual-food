const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dieta",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
      createdAt: false, //quitamos la columna de creacion
      updatedAt: false, // cambiamos el nombre da la columna donde aparece la fecha de actualizacion por la palabra "actualizacion"
    }
  );
};
