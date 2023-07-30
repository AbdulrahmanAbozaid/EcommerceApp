import { Schema, model } from "mongoose";

const orderItem = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const shipping = new Schema({
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const orderSchema = new Schema({
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
    required: true,
  },
  shipping,
  orderItems: [orderItem],
  totalPrice: {
    type: Number,
    required: true,
  },
});

const Order = model("Orders", orderSchema);

export default Order;
