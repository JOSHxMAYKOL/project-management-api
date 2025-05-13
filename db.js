const { Sequelize } = require('sequelize');

// Conexión a la base de datos MySQL
const sequelize = new Sequelize('gestion_colaborativa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
