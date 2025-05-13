// models/proyectoUsuarioModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const ProyectoUsuario = sequelize.define('ProyectoUsuario', {
  proyecto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Proyectos',
      key: 'id',
    },
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id',
    },
  },
});

module.exports = ProyectoUsuario;
