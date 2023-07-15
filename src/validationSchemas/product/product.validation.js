import Joi from "joi";

const productSchema = Joi.object()
  .required()
  .keys({
    productName: Joi.string().required().messages({
      "string.base": "Product name must be a string",
      "any.required": "Product name is required",
    }),
    description: Joi.string().required().messages({
      "string.base": "Description must be a string",
      "any.required": "Description is required",
    }),
    price: Joi.number().positive().required().messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be a positive number",
      "any.required": "Price is required",
    }),
    category: Joi.string().required().messages({
      "string.base": "Category must be a string",
      "any.required": "Category is required",
    }),
    availability: Joi.boolean().required().messages({
      "boolean.base": "Availability must be a boolean",
      "any.required": "Availability is required",
    }),
  });

const productUpdateSchema = Joi.object()
  .required()
  .keys({
    productName: Joi.string().optional().messages({
      "string.base": "Product name must be a string",
    }),
    description: Joi.string().optional().messages({
      "string.base": "Description must be a string",
    }),
    price: Joi.number().positive().optional().messages({
      "number.base": "Price must be a number",
      "number.positive": "Price must be a positive number",
    }),
    category: Joi.string().optional().messages({
      "string.base": "Category must be a string",
    }),
    availability: Joi.boolean().optional().messages({
      "boolean.base": "Availability must be a boolean",
    }),
  });

export { productSchema, productUpdateSchema };
