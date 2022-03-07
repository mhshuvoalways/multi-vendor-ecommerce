import React from "react";
import { useSelector } from "react-redux";

const ApplyCoupon = ({ calculate }) => {
  const orderReducer = useSelector((item) => item.orderReducer);
  return (
    <div>
      {`$${
        orderReducer.applyCoupon
          ? calculate -
            (calculate * process.env.REACT_APP_DISCOUNT_COUPON) / 100
          : calculate
      }`}
    </div>
  );
};

export default ApplyCoupon;
