module.exports = (schema) => (req, res, next) => {
  const validateResult = schema.validate(req.body);

  if (validateResult.error)
    return res.status(400).json({
      error: validateResult.error.details[0].message,
    });

  next();
};
