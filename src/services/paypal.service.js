import paypal from "paypal-rest-sdk";

paypal.configure({
  mode: process.env.NODE_ENV == "production" ? "live" : "sandbox", //sandbox or live
  client_id: process.env.PAYPAL_CLIENT,
  client_secret: process.env.PAYPAL_SECRET,
});

export const create_payment = async (payment) => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, (err, payment) => {
      if (err) reject(err);
      else resolve(payment);
    });
  });
};
