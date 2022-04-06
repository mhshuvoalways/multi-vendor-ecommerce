import React from "react";
import PayPal from "./Paypal";
import RazorPay from "./RazorPay";

const CheckoutMethod = () => {
  return (
    <div className="w-11/12 m-auto ">
      <p className="text-2xl text-center mb-5">Choose a method</p>
      <div className="flex flex-wrap justify-center gap-10 border p-5">
        <PayPal />
        <RazorPay />
      </div>
    </div>
  );
};

export default CheckoutMethod;
