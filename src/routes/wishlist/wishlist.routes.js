import express from "express";
import { addToWishlist } from "../../controllers/wishlist.controller.js";
import validator from "../../utils/validator.js";
import wishlistSchema from "../../validationSchemas/wishlist/wishlist.validation.js";
import { authenticate } from "./../../utils/token.utils";
import * as endpoints from "../../helpers/endpoints.js";
const router = express.Router();

// Add to wishlist
router.post(
  "/wishlist",
  [validator(wishlistSchema), authenticate(endpoints.ADD_TO_WISHLIST)],
  addToWishlist
);

export default router;
