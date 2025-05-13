// controllers/projectController.js
const { Proyecto } = require('../models/projectModel');

// Crear un nuevo proyecto
exports.crearProyecto = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const usuarioId = req.usuario.id;  // El ID del usuario está disponible por el middleware de autenticación

  const nuevoProyecto = await Proyecto.create({
    titulo,
    descripcion,
    usuario_id: usuarioId
  });

  res.status(201).send(nuevoProyecto);
};

// Listar proyectos
exports.listarProyectos = async (req, res) => {
  const proyectos = await Proyecto.findAll({ where: { usuario_id: req.usuario.id } });
  res.status(200).send(proyectos);
};

// Invitar a usuarios a un proyecto
exports.invitarUsuarios = async (req, res) => {
  const { usuarioId } = req.body;
  const proyectoId = req.params.id;

  // Lógica para invitar a un usuario a un proyecto (agregar relación en la tabla ProyectoUsuario)
  res.status(200).send(`Usuario ${usuarioId} invitado al proyecto ${proyectoId}`);
};
