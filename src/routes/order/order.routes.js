import { Router } from "express";
import * as orderController from "../../controllers/order.controller.js";
import validator from "../../utils/validator.js";
import orderSchema from "../../validationSchemas/order/order.validation.js";
const app = Router();

app.post("/createOrder", validator(orderSchema), orderController.createOrder);
app.get("/getOrderById/:id", orderController.getOrderById);

export default app;
