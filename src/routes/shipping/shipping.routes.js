import { Router } from "express";
import { createShipping } from "../../controllers/shipping.controller";
import validator from "../../utils/validator";
import shippingSchema from "../../validationSchemas/shipping/shipping.validation";

const app = Router();

app.post("/createShipping", validator(shippingSchema), createShipping);

export default app;
