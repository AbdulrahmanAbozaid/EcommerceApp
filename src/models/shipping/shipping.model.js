import { Schema, model } from "mongoose";

const shippingSchema = new Schema({
  orderID: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  shippingMethod: {
    type: String,
    required: true,
  },
  estimatedDeliveryDate: {
    type: Date,
    required: true,
  },
});

const Shipping = model("Shipping", shippingSchema);

export default Shipping;
