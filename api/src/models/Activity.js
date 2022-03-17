const {DataTypes} = require('sequelize');

// Tabla Activity. Cada propiedad es el nombre de cada columna en la tabla.
module.exports = (sequelize) => {
     sequelize.define('Activity', {
          name: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    isAlpha: true
               }
          },
          difficulty: {
               type: DataTypes.ENUM('1','2','3','4','5'),
               allowNull: false,
          },
          duration: {
               type: DataTypes.TIME,
               allowNull: true,
          },
          season: {
               type: DataTypes.ENUM('summer','autumm','winter','spring'),
          }
     },
     {
          timestamps: false,
     })
}