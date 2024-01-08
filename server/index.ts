import express from "express";

import { Server } from "socket.io";

const app = express();
const port = 3050;

const server = app.listen(port, () => {
  console.log("Listening on port: " + port);
});
const io = new Server(server, { cors: { origin: '*' } });

io.sockets.on("connection", (socket) => {
  socket.on("message", ({ msg, user }) => {
    // Goes to current user
    socket.emit('messsage', { msg: 'Welcome to the chat app' })

    // Goes to other uses
    socket.broadcast.emit('message', { msg: `${user} has connected` })

    // Goes to every user
    io.sockets.emit('message', { user, msg });

  });

  socket.on('disconnect', (user) => {
    socket.broadcast.emit('message', { user, msg: 'has disconnected' });
  })

  socket.on('activity', (user) => {
    socket.broadcast.emit('activity', user);
  })
});
