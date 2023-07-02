import { Router } from "express";
import * as orderController from "../../controllers/order.controller";
import validator from "../../utils/validator";
import orderSchema from "../../validationSchemas/order/order.validation";
const app = Router();

app.post("/createOrder", validator(orderSchema), orderController.createOrder);
app.get("/getOrderById", orderController.getOrderById);

export default app;
