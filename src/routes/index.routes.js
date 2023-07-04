const app = require("express").Router();

import users from "./user/user.routes";
import products from "./products/products.routes";
import orders from "./order/order.routes";
import payment from "./payment/payment.routes";
import shipping from "./shipping/shipping.routes";

app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);
app.use("/payment", payment);
app.use("/shipping", shipping);

export default app;
