import paypal from "@paypal/checkout-server-sdk";
import { config } from "dotenv";
config();

const Environment =
  process.env.NODE_ENV === "production"
    ? paypal.core.LiveEnvironment
    : paypal.core.SandboxEnvironment;

const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(process.env.PAYPAL_CLIENT, process.env.PAYPAL_SECRET)
);

export const create_payment = async (payment) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody(payment);

  try {
    const order = await paypalClient.execute(request);
    return order;
  } catch (error) {
    console.log(error);
  }
};
