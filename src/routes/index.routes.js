import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger.json");
// import swaggerDocument from "./swagger.json" assert { type: "json" };
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
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.get("*", (req, res) => {
  res.status(200).send("Welcome to order");
});

export default app;
