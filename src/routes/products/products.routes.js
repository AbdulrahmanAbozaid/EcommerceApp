import { Router } from "express";
const app = Router();
import {
  createProduct,
  updateProduct,
  deleteProduct,
  listProducts,
  getProductById,
} from "../../controllers/products.controller.js";
import validator from "../../services/validator.service.js";
import {
  productSchema,
  productUpdateSchema,
} from "../../validationSchemas/product/product.validation.js";
import { authenticate } from "./../../utils/token.utils.js";
import * as endpoints from "../../helpers/endpoints.js";

// Create
app.post(
  "/createProduct",
  [validator(productSchema), authenticate(endpoints.CREATE_PRODUCT)],
  createProduct
);

// Update
app.put(
  "/updateProduct/:id",
  [validator(productUpdateSchema), authenticate(endpoints.UPDATE_PRODUCT)],
  updateProduct
);

// Delete
app.delete(
  "/deleteProduct/:id",
  authenticate(endpoints.DELETE_PRODUCT),
  deleteProduct
);

// List
app.get("/listProducts", authenticate(endpoints.LIST_PRODUCTS), listProducts);

// Get By Id
app.get(
  "/getProductById/:id",
  authenticate(endpoints.GET_PRODUCT_BY_ID),
  getProductById
);

export default app;
