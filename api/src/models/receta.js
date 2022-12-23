const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "receta",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      steps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dishtypes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      createdAt: false, //quitamos la columna de creacion
      updatedAt: false, // cambiamos el nombre da la columna donde aparece la fecha de actualizacion por la palabra "actualizacion"
    }
  );
};
