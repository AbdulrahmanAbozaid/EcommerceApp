import joi from "joi";

const orderSchema = joi
  .object()
  .required()
  .keys({
    customerID: joi.string().required().empty().messages({
      "any.required": "Customer ID is required",
      "string.empty": "Customer ID must not be empty",
    }),
    orderStatus: joi
      .string()
      .valid("pending", "shipped", "delivered")
      .required()
      .empty()
      .messages({
        "any.required": "Order status is required",
        "string.empty": "Order status must not be empty",
        "any.only": "Invalid order status",
      }),

    orderItems: joi
      .array()
      .min(1)
      .required()
      .items(
        joi.object({
          productID: joi.string().required().messages({
            "any.required": "Product ID is required",
            "string.empty": "Product ID must not be empty",
          }),
          quantity: joi.number().integer().positive().required().messages({
            "any.required": "Quantity is required",
            "number.base": "Quantity must be a number",
            "number.integer": "Quantity must be an integer",
            "number.positive": "Quantity must be a positive number",
          }),
          price: joi.number().positive().required().messages({
            "any.required": "Price is required",
            "number.base": "Price must be a number",
            "number.positive": "Price must be a positive number",
          }),
          totalCost: joi.number().positive().required().messages({
            "any.required": "Total cost is required",
            "number.base": "Total cost must be a number",
            "number.positive": "Total cost must be a positive number",
          }),
        })
      ),
  });

export default orderSchema;
