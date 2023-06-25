const app = require("express").Router();
const productsController = require("../../controllers/products.controller");

// Create
app.post("/createProduct", productsController.createProduct);

// Update
app.put("/updateProduct/:id", productsController.updateProduct);

// Delete
app.delete("/deleteProduct/:id", productsController.deleteProduct);

// List
app.get("/listProducts", productsController.listProducts);

// Get By Id
app.get("/getProductById", productsController.getProductById);

module.exports = app;
