paypal
  .Buttons({
    async createOrder() {
      try {
        const res = await fetch("payment/createPayment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerID: "64af051f59e85d9b7d0b435e",
            orderID: "64d5cfe1dbac72908d3f3c11",
            amount: 900,
            method: "paypal",
          }),
        });

        const result = await res.json();

        if (result.success) {
          return result.orderRes.result.id;
        } else {
          console.log(result.error);
        }
      } catch (err) {
        console.log(err);
      }
    },

    onApprove(data, actions) {
      return actions.order.capture();
    },
  })
  .render("#paypal");
