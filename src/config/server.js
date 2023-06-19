const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const { connection } = require("./database");
const Routes = require("../routes/index.routes");

connection();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(Routes);

module.exports = app;
