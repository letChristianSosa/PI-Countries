const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    flag: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true
      }
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true
      }
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: true,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  },
  {
    timestamps: false,
  });
};
