import paymentRepo from "../models/payment/payment.repo.js";
import orderRepo from "../models/order/order.repo.js";
import { create_payment } from "../services/paypal.service.js";

const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const result = await paymentRepo.createPayment(paymentData);
    const {
      data: { orderItems, totalPrice },
    } = await orderRepo.getOrderById(result.data.orderID);

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://return.url",
        cancel_url: "http://cancel.url",
      },
      transactions: [
        {
          item_list: {
            items: orderItems.map((item) => {
              return {
                name: item.productID.productName,
                unit_amount: item.productID.price,
                quantity: item.quantity,
              };
            }),
          },
          amount: {
            currency: "USD",
            total: paymentData.amount,
          },
          description: "Order Payment",
        },
      ],
    };

    create_payment(create_payment_json)
      .then((transaction) => {
        console.log(`payment created\n transaction: " + ${JSON.stringify(
          transaction
        )}
      id: ${transaction.id}`);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

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
