import express from "express";
import { addToWishlist } from "../../controllers/wishlist.controller";
import validator from "../../utils/validator";
import wishlistSchema from "../../validationSchemas/wishlist/wishlist.validation";

const router = express.Router();

// Add to wishlist
router.post("/wishlist", validator(wishlistSchema), addToWishlist);

export default router;
