import { Router } from "express";
import { createShipping } from "../../controllers/shipping.controller.js";
import validator from "../../utils/validator.js";
import shippingSchema from "../../validationSchemas/shipping/shipping.validation.js";

const app = Router();

app.post("/createShipping", validator(shippingSchema), createShipping);

export default app;
