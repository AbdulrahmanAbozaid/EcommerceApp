import { Router } from "express";
import * as orderController from "../../controllers/order.controller.js";
import validator from "./../../services/validator.service.js";
import {
  createOrderSchema,
  updateOrderStatusSchema,
} from "./../../validationSchemas/order/order.validation.js";
import { authenticate } from "./../../utils/token.utils.js";
import * as endpoints from "../../helpers/endpoints.js";
const app = Router();

app.post(
  "/createOrder",
  [validator(createOrderSchema), authenticate(endpoints.CREATE_ORDER)],
  orderController.createOrder
);
app.get(
  "/getOrderById/:id",
  authenticate(endpoints.GET_ORDER_BY_ID),
  orderController.getOrderById
);

// Get all orders
app.get(
  "/listOrders",
  authenticate(endpoints.LIST_ORDERS),
  orderController.listOrders
);

// Update an order status
app.put(
  "/updateOrderStatus/:id",
  [
    validator(updateOrderStatusSchema),
    authenticate(endpoints.UPDATE_ORDER_STATUS),
  ],
  orderController.updateOrderStatus
);

// Cancel an order
app.delete(
  "/cancelOrder/:id",
  authenticate(endpoints.CANCEL_ORDER),
  orderController.cancelOrder
);

// Get orders by customer ID
app.get(
  "/getOrdersByCustomerId/:customerId",
  authenticate(endpoints.GET_ORDERS_BY_CUSTOMER_ID),
  orderController.getOrdersByCustomerId
);

export default app;
