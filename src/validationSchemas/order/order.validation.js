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
  });

export default orderSchema;
