const {DataTypes} = require('sequelize');

// Tabla Activity. 
module.exports = (sequelize) => {
     sequelize.define('Activity', {
          name: {
               type: DataTypes.STRING,
               allowNull: false,
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