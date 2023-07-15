import Joi from "joi";

const paymentSchema = Joi.object()
  .required()
  .keys({
    customerID: Joi.string().required().messages({
      "any.required": "Customer ID is required",
      "string.empty": "Customer ID must not be empty",
    }),
    orderID: Joi.string().required().messages({
      "any.required": "Order ID is required",
      "string.empty": "Order ID must not be empty",
    }),
    amount: Joi.number().positive().required().messages({
      "any.required": "Amount is required",
      "number.base": "Amount must be a number",
      "number.positive": "Amount must be a positive number",
    }),
    method: Joi.string()
      .valid("creditCard", "debitCard", "paypal")
      .required()
      .messages({
        "any.required": "Payment method is required",
        "string.empty": "Payment method must not be empty",
        "any.only": "Invalid payment method",
      }),
  });

export { paymentSchema };
