import express from "express";

import { Server } from "socket.io";

const app = express();
const port = 3050;

const server = app.listen(port, () => {
  console.log("Listening on port: " + port);
});
const io = new Server(server, { cors: { origin: '*' } });


app.get("/", (req, res) => {
  console.log(req);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});
