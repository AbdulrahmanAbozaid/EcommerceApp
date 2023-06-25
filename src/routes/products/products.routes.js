const app = require("express").Router();
const productsController = require("../../controllers/products.controller");
const validator = require("../../utils/validator");
const {
  productSchema,
  productUpdateSchema,
} = require("../../validationSchemas/product.validation");

// Create
app.post(
  "/createProduct",
  validator(productSchema),
  productsController.createProduct
);

// Update
app.put(
  "/updateProduct/:id",
  validator(productUpdateSchema),
  productsController.updateProduct
);

// Delete
app.delete("/deleteProduct/:id", productsController.deleteProduct);

// List
app.get("/listProducts", productsController.listProducts);

// Get By Id
app.get("/getProductById", productsController.getProductById);

module.exports = app;
