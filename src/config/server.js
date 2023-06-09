import express from "express";
import { config } from "dotenv";
const app = express();
config();

import cors from "cors";
import { connection } from "./database";
import Routes from "../routes/index.routes";

connection();
app.use(express.json());
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
