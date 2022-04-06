import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import AlertAction from "../../store/actions/AlertAction";
import { orderProduct } from "../../store/actions/orderAction";

const RazorPay = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.userReducer);
  const orderReducer = useSelector((item) => item.orderReducer);

  const navigation = useNavigate();

  const discount = orderReducer.applyCoupon
    ? process.env.REACT_APP_DISCOUNT_COUPON
    : false;

  const loadRazorpay = () => {
    axios
      .post("/payment/createorder", {
        amount: Math.round(localStorage.getItem("amount")) + "00",
      })
      .then((res) => {
        const { amount, id: order_id, currency } = res.data;
        axios
          .get("/payment/get")
          .then((rezkey) => {
            const options = {
              key: rezkey,
              amount: amount.toString(),
              currency: currency,
              name: "e-Shop",
              description: "Pay to purchase the product",
              order_id: order_id,

              handler: function (response) {
                axios
                  .post("/payment/payorder", {
                    amount: Math.round(localStorage.getItem("amount")),
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                    signature: response.razorpay_signature,
                    method: "razorpay",
                    discount,
                  })
                  .then(() => {
                    const billingAddress =
                      localStorage.getItem("billingAddress");
                    dispatch(
                      orderProduct(JSON.parse(billingAddress), navigation)
                    );
                  })
                  .catch((err) => {
                    dispatch(AlertAction(err.response.data.message));
                  });
              },
              prefill: {
                name: userReducer.user.lastName,
                email: userReducer.user.email,
                contact: userReducer.user.phone,
              },
              theme: {
                color: "#80c0f0",
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          })
          .catch((err) => {
            dispatch(AlertAction(err.response.data.message));
          });
      })
      .catch((err) => {
        dispatch(AlertAction(err.response.data.message));
      });
  };

  return (
    <div className="border p-5">
      <button
        onClick={loadRazorpay}
        type="button"
        className="bg-blue-600 text-white px-16 py-2 rounded w-full hover:bg-gray-900"
      >
        RazorPay
      </button>
    </div>
  );
};

export default RazorPay;
