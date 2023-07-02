const app = require("express").Router();

import users from "./user/user.routes";
import products from "./products/products.routes";
import orders from "./order/orders.routes";

app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);

export default app;
