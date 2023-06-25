const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
