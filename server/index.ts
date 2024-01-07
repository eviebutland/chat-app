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
    console.log(`${user}: ${msg}`);
    console.log('push received, emitting a pop');
    io.sockets.emit('message', { user, msg });
  });
});
