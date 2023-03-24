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

io.on('connect', (socket) => {
  console.log(`total: ${++count}, connect: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`total: ${--count}, disconnect: ${socket.id}`);
  });
});

setInterval(() => {
  io.volatile.emit('update', Math.random());
}, 1000 / 60);
