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

export { getOrderById, createOrder };
