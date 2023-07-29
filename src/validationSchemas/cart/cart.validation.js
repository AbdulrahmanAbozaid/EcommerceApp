import Joi from "joi";

// Validation schema for createCart
export const createCartSchema = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": "User ID is required.",
    "string.empty": "User ID must not be empty.",
  }),
});

// Validation schema for addToCart
export const addToCartSchema = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": "User ID is required.",
    "string.empty": "User ID must not be empty.",
  }),
  productId: Joi.string().required().messages({
    "any.required": "Product ID is required.",
    "string.empty": "Product ID must not be empty.",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a number.",
    "number.integer": "Quantity must be an integer.",
    "number.min": "Quantity must be at least 1.",
    "any.required": "Quantity is required.",
    "number.empty": "Quantity must not be empty.",
  }),
});

// Validation schema for updateCartItemQuantity
export const updateCartItemQuantitySchema = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": "User ID is required.",
    "string.empty": "User ID must not be empty.",
  }),
  productId: Joi.string().required().messages({
    "any.required": "Product ID is required.",
    "string.empty": "Product ID must not be empty.",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a number.",
    "number.integer": "Quantity must be an integer.",
    "number.min": "Quantity must be at least 1.",
    "any.required": "Quantity is required.",
    "number.empty": "Quantity must not be empty.",
  }),
});
