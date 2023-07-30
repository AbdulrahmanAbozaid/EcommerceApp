import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import { connection } from "./database.js";
import Routes from "../routes/index.routes.js";
import bodyParser from "body-parser";

const app = express();

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

export default app;
