import Joi from "joi";

export default wishlistSchema = Joi.object()
  .required()
  .keys({
    customerID: Joi.string().required().messages({
      "any.required": "Customer ID is required",
      "string.empty": "Customer ID must not be empty",
    }),
    productID: Joi.string().required().messages({
      "any.required": "Product ID is required",
      "string.empty": "Product ID must not be empty",
    }),
  });
