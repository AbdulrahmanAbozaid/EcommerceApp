import { Router } from "express";
import { createPayment } from "../../controllers/payment.controller.js";
import validator from "../../utils/validator.js";
import { paymentSchema } from "../../validationSchemas/payment/payment.validation.js";

const app = Router();

// Create a new payment
app.post("/createPayment", validator(paymentSchema), createPayment);

export default app;
