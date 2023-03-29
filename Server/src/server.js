import { Server } from 'http';
import express from 'express';
import { Server as socketio } from 'socket.io';

const app = express();
const httpServer = Server(app);
const io = new socketio(httpServer);

app.use(express.static('public'));

const port = 3000;

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let count = 0;

let likes = 42;

io.on('connect', (socket) => {
  const colorIndex = socket.id.charCodeAt(0) % 7;
  const formatString = `\x1b[3${colorIndex}m%s\x1b[0m`;

  console.log(formatString, `total: ${++count}, connect: ${socket.id}`);

  socket.on('like', () => likes++);

  socket.on('disconnect', () => {
    console.log(formatString, `total: ${--count}, disconnect: ${socket.id}`);
  });
});

setInterval(() => {
  io.volatile.emit('update', Math.random(), likes);
}, 1000 / 60);
