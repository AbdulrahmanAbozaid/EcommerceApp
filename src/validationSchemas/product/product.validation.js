const joi = require("joi");

const productSchema = joi
  .object()
  .required()
  .keys({
    productName: joi.string().required().messages({
      "string.base": "Product name must be a string",
      "any.required": "Product name is required",
    }),
    description: joi.string().required().messages({
      "string.base": "Description must be a string",
      "any.required": "Description is required",
    }),
    price: joi.number().positive().required().messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be a positive number",
      "any.required": "Price is required",
    }),
    category: joi.string().required().messages({
      "string.base": "Category must be a string",
      "any.required": "Category is required",
    }),
    availability: joi.boolean().required().messages({
      "boolean.base": "Availability must be a boolean",
      "any.required": "Availability is required",
    }),
  });

const productUpdateSchema = joi
  .object()
  .required()
  .keys({
    productName: joi.string().optional().messages({
      "string.base": "Product name must be a string",
    }),
    description: joi.string().optional().messages({
      "string.base": "Description must be a string",
    }),
    price: joi.number().positive().optional().messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be a positive number",
    }),
    category: joi.string().optional().messages({
      "string.base": "Category must be a string",
    }),
    availability: joi.boolean().optional().messages({
      "boolean.base": "Availability must be a boolean",
    }),
  });

module.exports = {
  productSchema,
  productUpdateSchema,
};
