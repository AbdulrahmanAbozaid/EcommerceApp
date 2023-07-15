import paymentRepo from "../models/payment/payment.repo.js";

const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const result = await paymentRepo.createPayment(paymentData);

    if (result.success) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createPayment };
