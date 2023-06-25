const app = require("express").Router();

const users = require("./user/user.routes");
const products = require("./products/products.routes");

app.use("/users", users);
app.use("/products", products);

module.exports = app;
