const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sequelize = require('./db'); // Archivo para la conexión con la base de datos
const authRoutes = require('./routes/authRoutes'); // Rutas de autenticación
const projectRoutes = require('./routes/projectRoutes'); // Rutas de proyectos
const taskRoutes = require('./routes/taskRoutes'); // Rutas de tareas
const autenticar = require('./middlewares/authMiddleware'); // Middleware de autenticación

// Crear servidor HTTP con Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Instanciamos Socket.IO

// Middleware para procesar JSON
app.use(express.json());

// Usar las rutas
app.use('/auth', authRoutes); // Rutas de autenticación
app.use('/proyectos', autenticar, projectRoutes); // Rutas de proyectos (requiere autenticación)
app.use('/tareas', autenticar, taskRoutes); // Rutas de tareas (requiere autenticación)

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Conectar a la base de datos y levantar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    
    // Levantar el servidor con WebSockets
    server.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Configuración de WebSockets (Socket.IO)
io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

 
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Emitir notificaciones cuando se actualice una tarea
  socket.on('actualizar-tarea', (data) => {
    // Emitir a todos los clientes que se ha actualizado una tarea
    io.emit('notificacion-tarea', data);
  });
});

