import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connection } from "./database.js";
import Routes from "../routes/index.routes.js";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // ["http://localhost/port"]
  },
});

config();
connection();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public/")));
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
io.on("connection", (socket) => {
  // console.log(socket.id);

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log("New Room: " + room);
  });

  socket.on("send-message", (room, message) => {
    if (room) socket.broadcast.to(room).emit("receive-message", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
});
app.use(Routes);

export default server;
