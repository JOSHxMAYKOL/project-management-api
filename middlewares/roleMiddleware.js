// middlewares/roleMiddleware.js
function verificarRol(rolRequerido) {
  return (req, res, next) => {
    if (req.usuario.rol !== rolRequerido) {
      return res.status(403).send('Acceso no permitido');
    }
    next();
  };
}

module.exports = verificarRol;
