const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models/userModel');

// Login de usuario
exports.login = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Buscar al usuario por email
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(400).send('Usuario no encontrado');
    }

    // Verificar la contraseña
    const contrasenaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contrasenaValida) {
      return res.status(400).send('Contraseña incorrecta');
    }

    // Generar el JWT
    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      'SECRET_KEY', // Cambia esto por una clave secreta más segura
      { expiresIn: '2h' }
    );

    // Enviar el token en la respuesta
    res.status(200).send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};
