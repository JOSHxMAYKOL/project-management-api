const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const autenticar = require('../middlewares/authMiddleware');

// Ruta para crear una tarea (requiere autenticación)
router.post('/', autenticar, taskController.crearTarea);

// Ruta para listar tareas (requiere autenticación)
router.get('/', autenticar, taskController.listarTareas);

// Ruta para actualizar el estado de una tarea (requiere autenticación)
router.put('/:id', autenticar, taskController.actualizarTarea);

module.exports = router;
