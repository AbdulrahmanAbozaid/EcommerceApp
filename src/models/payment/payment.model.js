import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  orderID: {
    type: Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    enum: ["paypal"],
    required: true,
  },
});

const Payment = model("Payment", paymentSchema);

export default Payment;
