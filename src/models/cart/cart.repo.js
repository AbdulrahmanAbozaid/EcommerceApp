import Cart from "./cart.model.js";

const createCart = async (userId) => {
  try {
    const cart = new Cart({ user: userId });
    const savedCart = await cart.save();
    return { success: true, code: 200, data: savedCart, error: null };
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to create cart.",
    };
  }
};

const getCartByUserId = async (userId) => {
  try {
    const cart = await Cart.findOne({ user: userId }).populate(
      "items.product",
      "productName price"
    );
    return { success: true, code: 200, data: cart, error: null };
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to get cart.",
    };
  }
};

const addToCart = async (userId, productId, quantity) => {
  try {
    let cart, foundItem;
    const userCart = await Cart.findOne({
      user: userId,
    });

    if (userCart) {
      foundItem = userCart.items.find((item) => item.product == productId);

      if (foundItem) {
        let newQuantity = +foundItem.quantity + +quantity;
        foundItem.set("quantity", newQuantity);
      } else {
        foundItem = userCart.items.push({ quantity, product: productId });
      }

      cart = (await userCart.save()).populate("items.product", "user");
      return { success: true, code: 200, data: cart, error: null };
    } else {
      cart = await Cart.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
      });
      return { success: true, code: 200, data: cart, error: null };
    }
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to add item to cart.",
    };
  }
};

const updateCartItemQuantity = async (userId, productId, quantity) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId, "items.product": productId },
      { $set: { "items.$.quantity": quantity } },
      { new: true }
    );
    return { success: true, code: 200, data: cart, error: null };
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to update cart item quantity.",
    };
  }
};

const removeFromCart = async (userId, productId) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true }
    );
    return { success: true, code: 200, data: cart, error: null };
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to remove item from cart.",
    };
  }
};

const flushCart = async (userId) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { items: [] },
      { new: true }
    ).populate("items.product", "productName price");

    if (cart) {
      return { success: true, code: 200, data: cart, error: null };
    } else {
      return {
        success: false,
        code: 404,
        data: null,
        error: "Cart not found.",
      };
    }
  } catch (error) {
    return {
      success: false,
      code: 500,
      data: null,
      error: "Failed to flush cart.",
    };
  }
};

export {
  createCart,
  getCartByUserId,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  flushCart,
};
