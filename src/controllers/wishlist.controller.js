import wishlistRepository from "../models/wishlist/wishlist.repo";

export const addToWishlist = async (req, res) => {
  try {
    const wishlistData = req.body;
    const result = await wishlistRepository.addToWishlist(wishlistData);

    if (result.success) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
