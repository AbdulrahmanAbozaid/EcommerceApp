import mongoose from "mongoose";

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
