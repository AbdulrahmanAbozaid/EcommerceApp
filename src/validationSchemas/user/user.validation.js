const joi = require("joi");

exports.userSchema = joi
  .object()
  .required()
  .keys({
    firstName: joi.string().required().empty().alphanum().messages({
      "string.base": "First name must be a string",
      "any.required": "First name is required",
      "string.alphanum":
        "Requires the string value to only contain a-z, A-Z, and 0-9.",
      "string.empty": "First name must not be empty",
    }),
    lastName: joi.string().required().empty().alphanum().messages({
      "string.base": "Last name must be a string",
      "any.required": "Last name is required",
      "string.alphanum":
        "Requires the string value to only contain a-z, A-Z, and 0-9.",
      "string.empty": "Last name must not be empty",
    }),
    userName: joi
      .string()
      .required()
      .min(5)
      .max(30)
      .empty()
      .alphanum()
      .messages({
        "string.base": "User name must be a string",
        "any.required": "User name is required",
        "string.alphanum":
          "Requires the string value to only contain a-z, A-Z, and 0-9.",
        "string.min": "userName minimum length is 3",
        "string.max": "userName maximum length is 30",
        "string.empty": "User name must not be empty",
      }),
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ["com", "org", "email"],
        },
      })
      .required()
      .empty()
      .messages({
        "string.base": "Email must be a string",
        "string.email": "Invalid email format",
        "any.required": "Email is required",
        "string.empty": "Email must not be empty",
      }),
    password: joi
      .string()
      .required()
      .empty()
      .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .messages({
        "string.base": "Password must be a string",
        "any.required": "Password is required",
        "string.pattern.base":
          "password must contain Minimum eight characters, at least one letter and one number",
      }),
    role: joi
      .string()
      .valid("customer", "admin", "customerService", "marketing")
      .empty()
      .required()
      .messages({
        "string.base": "Role must be a string",
        "any.required": "Role is required",
        "any.only": "Invalid role",
        "string.empty": "Role must not be empty",
      }),
  });
