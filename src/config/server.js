import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connection } from "./database.js";
import Routes from "../routes/index.routes.js";
import bodyParser from "body-parser";
import socketIo from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // ["http://localhost/port"]
  },
});

config();
connection();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(Routes);

io.on("connection", (socket) => {
  // console.log(socket.id);

  socket.on("join-room", (room) => {
    socket.join(room);
  });

  socket.on("send-message", (room, message) => {
    if (room) socket.broadcast.to(room).emit("receive-message", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
});

export default server;
