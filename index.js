require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const server = http.createServer(app);
/**
 * Initializes a new instance of the Server with CORS configuration.
 * 
 * @param {Object} server - The HTTP server instance.
 * @param {Object} options - The configuration options for the server.
 * @param {Object} options.cors - The CORS configuration.
 * @param {string} options.cors.origin - The allowed origin for CORS requests.
 * @param {Array<string>} options.cors.methods - The allowed HTTP methods for CORS requests.
 */
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

connectDB(); // Connect to the database

app.use('/api', roomRoutes);
app.use('/api', userRoutes);

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on('join-room', (roomId, userName) => {
    socket.join(roomId);
    io.to(roomId).emit('user-connected', userName);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});