import { Router } from "express";
const app = Router();

import users from "./user/user.routes.js";
import products from "./products/products.routes.js";
import orders from "./order/order.routes.js";
import payment from "./payment/payment.routes.js";
import authUser from "./user/auth.routes.js";
import cart from "./cart/cart.routes.js";

app.use("/users", users);
app.use("/users/auth", authUser);
app.use("/products", products);
app.use("/orders", orders);
app.use("/payment", payment);
app.use("/cart", cart);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to order");
});

export default app;
