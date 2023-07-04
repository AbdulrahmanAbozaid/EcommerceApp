import Payment from "./payment.model";
class PaymentRepo {
  async createPayment(paymentData) {
    try {
      const payment = new Payment(paymentData);
      const savedPayment = await payment.save();
      return { code: 200, success: true, data: savedPayment };
    } catch (error) {
      return { code: 500, success: false, error: error.message };
    }
  }
}

export default new PaymentRepo();
