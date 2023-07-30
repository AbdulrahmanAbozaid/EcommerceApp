import { Router } from "express";
import validator from "./../../services/validator.service.js";
import {
  createCartSchema,
  addToCartSchema,
  updateCartItemQuantitySchema,
} from "../../validationSchemas/cart/cart.validation.js";
import * as cartController from "./../../controllers/cart.controller.js";
const app = Router();

// Create a new cart
app.post("/createCart", validator(createCartSchema), cartController.createCart);

// Get cart by user ID
app.get("/getCartByUserId/:id", cartController.getCartByUserId);

// Add item to cart
app.post("/addToCart", validator(addToCartSchema), cartController.addToCart);

// Update cart item quantity
app.put(
  "/updateCartItemQuantity",
  validator(updateCartItemQuantitySchema),
  cartController.updateCartItemQuantity
);

// Remove item from cart
app.delete("/removeFromCart/:userId/:productId", cartController.removeFromCart);

export default app;
