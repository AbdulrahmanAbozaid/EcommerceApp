import { Router } from "express";
import * as orderController from "../../controllers/order.controller.js";
import validator from "../../utils/validator.js";
import orderSchema from "../../validationSchemas/order/order.validation.js";
import { authenticate } from "./../../utils/token.utils";
import * as endpoints from "../../helpers/endpoints.js";
const app = Router();

app.post(
  "/createOrder",
  [validator(orderSchema), authenticate(endpoints.CREATE_ORDER)],
  orderController.createOrder
);
app.get(
  "/getOrderById/:id",
  authenticate(endpoints.GET_ORDER_BY_ID),
  orderController.getOrderById
);

export default app;
