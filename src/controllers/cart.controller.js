import cartRepository from "./../models/cart/cart.repo.js";

// Create a new cart
export const createCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await cartRepository.createCart(userId);
    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      data: null,
      error: "Failed to create cart.",
    });
  }
};

// Get cart by user ID
export const getCartByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await cartRepository.getCartByUserId(userId);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      data: null,
      error: "Failed to get cart.",
    });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const result = await cartRepository.addToCart(userId, productId, quantity);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      data: null,
      error: "Failed to add item to cart.",
    });
  }
};

// Update cart item quantity
export const updateCartItemQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const result = await cartRepository.updateCartItemQuantity(
      userId,
      productId,
      quantity
    );
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      data: null,
      error: "Failed to update cart item quantity.",
    });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const result = await cartRepository.removeFromCart(userId, productId);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      code: 500,
      data: null,
      error: "Failed to remove item from cart.",
    });
  }
};
