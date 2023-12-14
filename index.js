const http = require('http');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 8000;

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('connection', null);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

server.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

