const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models/userModel'); // Asegúrate de tener el modelo de Usuario

// Registrar un nuevo usuario
exports.registro = async (req, res) => {
  const { nombre, email, contraseña, rol } = req.body;

  try {
    // Verificar si el email ya existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).send('El usuario ya existe');
    }

    // Encriptar la contraseña
    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

    // Crear el nuevo usuario
    const nuevoUsuario = await Usuario.create({
      nombre,
      email,
      contraseña: contraseñaEncriptada,
      rol,
    });

    // Generar el JWT
    const token = jwt.sign(
      { id: nuevoUsuario.id, rol: nuevoUsuario.rol },
      'SECRET_KEY', // Cambia esto por una clave secreta más segura
      { expiresIn: '2h' }
    );

    // Enviar el token en la respuesta
    res.status(201).send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};
