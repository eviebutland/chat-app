import express from "express";
import { connectDb } from "~/server/db";
import { Server } from "socket.io";
import bodyParser from "body-parser";

import router from "./router";
const app = express();
const port = 3050;

const server = app.listen(port, () => {
  console.log("Listening on port: " + port);
  connectDb()
});

app.use(bodyParser.json())
app.use(router)

const io = new Server(server, { cors: { origin: '*' } });

io.sockets.on("connection", (socket) => {
  socket.on("message", ({ msg, user }) => {
    const time = new Date()
    // Goes to current user
    socket.emit('messsage', { msg: 'Welcome to the chat app', time })

    // Goes to other uses
    socket.broadcast.emit('message', { msg: `${user} has connected`, time })

    // Goes to every user
    io.sockets.emit('message', { user, msg, time });
  });

  socket.on('disconnect', (user) => {
    socket.broadcast.emit('message', { user, msg: 'has disconnected' });
  })

  socket.on('activity', (user) => {
    socket.broadcast.emit('activity', user);
  })

  socket.on('enterChat', (data) => {
    console.log('user has entered a new chat')
  })
});
