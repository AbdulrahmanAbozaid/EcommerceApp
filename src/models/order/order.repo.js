import Order from "./order.model.js";

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

  async updateOrderStatus(orderId, orderStatus) {
    try {
      const order = await Order.findByIdAndUpdate(
        orderId,
        { orderStatus },
        { new: true }
      );
      return { success: true, code: 200, data: order, error: null };
    } catch (error) {
      return {
        success: false,
        code: 500,
        data: null,
        error: "Failed to update order status.",
      };
    }
  }

  async cancelOrder(orderId) {
    try {
      const order = await Order.findByIdAndDelete(orderId);
      return { success: true, code: 200, data: order, error: null };
    } catch (error) {
      return {
        success: false,
        code: 500,
        data: null,
        error: "Failed to cancel order.",
      };
    }
  }

  async getOrdersByCustomerId(customerId) {
    try {
      const orders = await Order.find({ customerID: customerId });
      return { success: true, code: 200, data: orders, error: null };
    } catch (error) {
      return {
        success: false,
        code: 500,
        data: null,
        error: "Failed to get orders.",
      };
    }
  }

  async listOrders(filter) {
    try {
      const orders = await Order.find(filter);
      return { success: true, code: 200, data: orders, error: null };
    } catch (error) {
      return {
        success: false,
        code: 500,
        data: null,
        error: "Failed to get orders.",
      };
    }
  }

  async getOrderById(orderId) {
    try {
      const order = await Order.findById(orderId)
        .populate("customerID")
        .populate("orderItems.productID")
        .exec();
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
