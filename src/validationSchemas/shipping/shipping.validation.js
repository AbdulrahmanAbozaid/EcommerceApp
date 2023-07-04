import Joi from "joi";

export default shippingSchema = Joi.object({
  orderID: Joi.string().required().messages({
    "any.required": "Order ID is required",
    "string.empty": "Order ID must not be empty",
  }),
  shippingAddress: Joi.string().required().messages({
    "any.required": "Shipping address is required",
    "string.empty": "Shipping address must not be empty",
  }),
  shippingMethod: Joi.string().required().messages({
    "any.required": "Shipping method is required",
    "string.empty": "Shipping method must not be empty",
  }),
  estimatedDeliveryDate: Joi.date().required().messages({
    "any.required": "Estimated delivery date is required",
    "date.base": "Estimated delivery date must be a valid date",
  }),
});
