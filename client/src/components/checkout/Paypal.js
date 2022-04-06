import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import AlertAction from "../../store/actions/AlertAction";
import { orderProduct } from "../../store/actions/orderAction";

const Paypal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const orderReducer = useSelector((item) => item.orderReducer);

  const discount = orderReducer.applyCoupon
    ? process.env.REACT_APP_DISCOUNT_COUPON
    : false;

  return (
    <div className="border p-5">
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: Math.round(localStorage.getItem("amount")),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order
              .capture()
              .then(() => {
                axios
                  .post("/payment/payorder", {
                    amount: Math.round(localStorage.getItem("amount")),
                    paymentId: data.paymentID,
                    orderId: data.orderID,
                    payerID: data.payerID,
                    method: "paypal",
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
              })
              .catch((err) => {
                dispatch(AlertAction(err.response.data));
              });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
