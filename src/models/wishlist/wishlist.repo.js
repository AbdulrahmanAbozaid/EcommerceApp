import Wishlist from "./wishlist.model.js";

class WishlistRepository {
  async addToWishlist(wishlistData) {
    try {
      const wishlist = new Wishlist(wishlistData);
      const savedWishlist = await wishlist.save();
      return { code: 200, success: true, data: savedWishlist };
    } catch (error) {
      return { code: 500, success: false, error: error.message };
    }
  }
}

export default new WishlistRepository();
