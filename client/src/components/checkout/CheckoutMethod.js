import React from "react";
import PayPal from "./Paypal";
import RazorPay from "./RazorPay";
import PaymentFile from "../../assets/payment/payment-system.txt";

const CheckoutMethod = () => {
  return (
    <div className="w-11/12 m-auto ">
      <p className="text-2xl text-center mb-5">Choose a method</p>
      <div className="flex flex-wrap justify-center gap-10 border p-5">
        <PayPal />
        <RazorPay />
      </div>
      <p className="text-center mt-5">
        Download the file and see how to payment:{" "}
        <a href={PaymentFile} className="text-blue-900 underline" download>
          Download
        </a>
      </p>
    </div>
  );
};

export default CheckoutMethod;
