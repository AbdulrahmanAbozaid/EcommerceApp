import { Router } from "express";
const app = Router();
import {
  createProduct,
  updateProduct,
  deleteProduct,
  listProducts,
  getProductById,
} from "../../controllers/products.controller.js";
import validator from "../../utils/validator.js";
import {
  productSchema,
  productUpdateSchema,
} from "../../validationSchemas/product/product.validation.js";

// Create
app.post("/createProduct", validator(productSchema), createProduct);

// Update
app.put("/updateProduct/:id", validator(productUpdateSchema), updateProduct);

// Delete
app.delete("/deleteProduct/:id", deleteProduct);

// List
app.get("/listProducts", listProducts);

// Get By Id
app.get("/getProductById/:id", getProductById);

export default app;
