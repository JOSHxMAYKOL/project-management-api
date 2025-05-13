const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send("Token no proporcionado");
  }

  // Verificar el token JWT
  jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(500).send("Token no válido");
    }
    req.usuario = decoded; // Guardar la información del usuario en el request
    next(); // Llamar al siguiente middleware o ruta
  });
}

module.exports = autenticar;
