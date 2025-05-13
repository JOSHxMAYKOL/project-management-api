const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const autenticar = require('../middlewares/authMiddleware');

// Ruta para crear un nuevo proyecto (requiere autenticación)
router.post('/', autenticar, projectController.crearProyecto);

// Ruta para listar proyectos (requiere autenticación)
router.get('/', autenticar, projectController.listarProyectos);

// Ruta para invitar a usuarios a un proyecto (requiere autenticación)
router.post('/:id/invitar', autenticar, projectController.invitarUsuarios);

module.exports = router;
