import paymentRepo from "../models/payment/payment.repo.js";
import orderRepo from "../models/order/order.repo.js";
import { create_payment } from "../services/paypal.service.js";

const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const result = await paymentRepo.createPayment(paymentData);
    const {
      data: { orderItems },
    } = await orderRepo.getOrderById(result.data.orderID);

    const items = orderItems.map((item) => {
      return {
        name: item.productID.productName,
        unit_amount: {
          currency_code: "USD",
          value: item.productID.price,
        },
        quantity: item.quantity,
      };
    });

    let totalPrice = items.reduce((sum, item) => {
      return sum + +item.unit_amount.value * +item.quantity;
    }, 0);

    const obj = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalPrice,
            breakdown: {
              item_total: { currency_code: "USD", value: totalPrice },
            },
          },
          items,
          shipping: {
            address: {
              address_line_1: "1234 Main St",
              address_line_2: "Apt 2B",
              admin_area_2: "San Jose",
              admin_area_1: "CA",
              postal_code: "95131",
              country_code: "US",
            },
          },
        },
      ],
      application_context: {
        brand_name: "Your Brand Name",
        locale: "en-US",
        landing_page: "LOGIN",
        shipping_preference: "SET_PROVIDED_ADDRESS",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3000/payment/success",
        cancel_url: "http://localhost:3000/payment/cancel",
      },
    };

    const orderRes = await create_payment(obj);

    if (result.success) {
      return res.status(result.code).json({ ...result, orderRes });
    } else {
      return res.status(result.code).json({ error: result.error });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createPayment };
