import { Router } from "express";
import { createPayment } from "../../controllers/payment.controller.js";
import validator from "../../services/validator.service.js";
import { paymentSchema } from "../../validationSchemas/payment/payment.validation.js";
import { authenticate } from "./../../utils/token.utils.js";
import * as endpoints from "../../helpers/endpoints.js";

const app = Router();

// Create a new payment
app.post(
  "/createPayment",
  [validator(paymentSchema), authenticate(endpoints.CREATE_PAYMENT)],
  createPayment
);

export default app;
