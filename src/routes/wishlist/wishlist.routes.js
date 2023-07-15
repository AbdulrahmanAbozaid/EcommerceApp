import express from "express";
import { addToWishlist } from "../../controllers/wishlist.controller.js";
import validator from "../../utils/validator.js";
import wishlistSchema from "../../validationSchemas/wishlist/wishlist.validation.js";

const router = express.Router();

// Add to wishlist
router.post("/wishlist", validator(wishlistSchema), addToWishlist);

export default router;
