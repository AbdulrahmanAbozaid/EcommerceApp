import Order from "./order.model";

class OrderRepo {
  async createOrder(orderData) {
    try {
      const order = new Order(orderData);
      const savedOrder = await order.save();
      return { code: 200, success: true, data: savedOrder };
    } catch (error) {
      return { code: 500, success: false, error: error.message };
    }
  }

  async getOrderById(orderId) {
    try {
      const order = await Order.findById(orderId).populate("customerID").exec();
      if (!order) {
        return { code: 404, success: false, error: "Order not found" };
      }
      return { code: 200, success: true, data: order };
    } catch (error) {
      return { code: 500, success: false, error: error.message };
    }
  }
}

export default new OrderRepo();
