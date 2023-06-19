const app = require("express").Router();

const users = require("./user/user.routes");

app.use("/users", users);

module.exports = app;
