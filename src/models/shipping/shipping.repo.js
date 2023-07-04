import Shipping from "./shipping.model";

class ShippingRepository {
  async createShipping(shippingData) {
    try {
      const shipping = new Shipping(shippingData);
      const savedShipping = await shipping.save();
      return { code: 200, success: true, data: savedShipping };
    } catch (error) {
      return { code: 500, success: false, error: error.message };
    }
  }
}

export default new ShippingRepository();
