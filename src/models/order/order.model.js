import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
  },
});

const Order = model("Order", orderSchema);

export default Order;
