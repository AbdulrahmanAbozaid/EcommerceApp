import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

const Product = model("Products", productSchema);

export default Product;
