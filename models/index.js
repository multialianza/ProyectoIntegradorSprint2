// models/index.js
// Configuración central de Sequelize y relaciones entre modelos

require('dotenv').config();
const { Sequelize } = require('sequelize');

// Conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

// Importar modelos
const Usuario = require('./usuario')(sequelize);
const Tablero = require('./tablero')(sequelize);
const Lista = require('./lista')(sequelize);
const Tarjeta = require('./tarjeta')(sequelize);

// Relaciones
Usuario.hasMany(Tablero);
Tablero.belongsTo(Usuario);

Tablero.hasMany(Lista);
Lista.belongsTo(Tablero);

Lista.hasMany(Tarjeta);
Tarjeta.belongsTo(Lista);

module.exports = {
  sequelize,
  Usuario,
  Tablero,
  Lista,
  Tarjeta,
};