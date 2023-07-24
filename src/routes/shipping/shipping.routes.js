import { Router } from "express";
import { createShipping } from "../../controllers/shipping.controller.js";
import validator from "../../utils/validator.js";
import shippingSchema from "../../validationSchemas/shipping/shipping.validation.js";
import { authenticate } from "./../../utils/token.utils";
import * as endpoints from "../../helpers/endpoints.js";
const app = Router();

app.post(
  "/createShipping",
  [validator(shippingSchema), authenticate(endpoints.createShipping)],
  createShipping
);

export default app;
