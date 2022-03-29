const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    nameSpanish: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,      
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,      
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
