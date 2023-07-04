import { Router } from "express";
import paymentCtrl from "../../controllers/payment.controller";
import validator from "../../utils/validator";
import { paymentSchema } from "../../validationSchemas/payment/payment.validation";

const app = Router();

// Create a new payment
app.post("/createPayment", validator(paymentSchema), paymentCtrl.createPayment);

export default app;
