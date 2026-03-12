// models/tablero.js
// Modelo Tablero

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Tablero', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};