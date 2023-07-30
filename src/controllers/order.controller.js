import orderRepo from "../models/order/order.repo.js";

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const result = await orderRepo.createOrder(orderData);

    if (result.success) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderRepo.getOrderById(id);

    if (result.success) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all orders
const listOrders = async (req, res) => {
  const { filter } = req.body;
  try {
    const orders = await orderRepo.listOrders(filter);
    res.status(orders.code).json(orders);
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to get orders." });
  }
};

// Update an order status
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;
    const order = await orderRepo.updateOrderStatus(id, orderStatus);
    res.status(order.code).json(order);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: "Failed to update order status." });
  }
};

// Cancel an order
const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderRepo.cancelOrder(id);
    res.status(order.code).json(order);
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to cancel order." });
  }
};

// Get orders by customer ID
const getOrdersByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.params;
    const orders = await orderRepo.getOrdersByCustomerId(customerId);
    res.status(orders.code).json(orders);
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to get orders." });
  }
};

export {
  getOrderById,
  createOrder,
  cancelOrder,
  updateOrderStatus,
  getOrdersByCustomerId,
  listOrders,
};
