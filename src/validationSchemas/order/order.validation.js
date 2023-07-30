import Joi from "joi";

const orderItemSchema = Joi.object({
  productID: Joi.string().required().messages({
    "any.required": "Product ID is required.",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a number.",
    "number.integer": "Quantity must be an integer.",
    "number.min": "Quantity must be at least 1.",
    "any.required": "Quantity is required.",
  }),
  price: Joi.number().min(0).required().messages({
    "number.base": "Price must be a number.",
    "number.min": "Price must be a positive number or zero.",
    "any.required": "Price is required.",
  }),
  totalCost: Joi.number().min(0).required().messages({
    "number.base": "Total cost must be a number.",
    "number.min": "Total cost must be a positive number or zero.",
    "any.required": "Total cost is required.",
  }),
});

const shippingSchema = Joi.object({
  address: Joi.string().required().messages({
    "string.empty": "Shipping address cannot be empty.",
    "any.required": "Shipping address is required.",
  }),
  phone: Joi.string().required().messages({
    "string.empty": "Shipping phone number cannot be empty.",
    "any.required": "Shipping phone number is required.",
  }),
  city: Joi.string().required().messages({
    "string.empty": "Shipping city cannot be empty.",
    "any.required": "Shipping city is required.",
  }),
});

const createOrderSchema = Joi.object({
  customerID: Joi.string().required().messages({
    "any.required": "Customer ID is required.",
  }),
  orderItems: Joi.array().items(orderItemSchema).min(1).required().messages({
    "array.base": "Order items must be an array.",
    "array.min": "At least one order item is required.",
    "any.required": "Order items are required.",
  }),
  orderStatus: Joi.string()
    .valid("pending", "shipped", "delivered")
    .default("pending")
    .required()
    .messages({
      "any.only":
        'Order status must be one of "pending", "shipped", or "delivered".',
      "any.required": "Order status is required.",
    }),
  shipping: shippingSchema.required().messages({
    "any.required": "Shipping details are required.",
  }),
});

const updateOrderStatusSchema = Joi.object({
  orderStatus: Joi.string()
    .valid("pending", "shipped", "delivered")
    .required()
    .messages({
      "any.only":
        'Order status must be one of "pending", "shipped", or "delivered".',
      "any.required": "Order status is required.",
    }),
});

export { createOrderSchema, updateOrderStatusSchema };
