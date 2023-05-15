const express = require("express");
const app = express();

const cors = require("cors");
const { connection } = require("./dbConnection");

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

module.exports = app;
