import shippingRepo from "../models/shipping/shipping.repo";
const createShipping = async (req, res) => {
  try {
    const shippingData = req.body;
    const result = await shippingRepo.createShipping(shippingData);

    if (result.success) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createShipping };
