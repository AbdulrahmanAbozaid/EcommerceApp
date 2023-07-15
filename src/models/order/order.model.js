import { Schema, model } from "mongoose";

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
  orderItems: [
    {
      productID: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      totalCost: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = model("Orders", orderSchema);

export default Order;
