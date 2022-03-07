import React from "react";

const Discount = ({ calculate }) => {
  return (
    <div>
      - ${(calculate * process.env.REACT_APP_DISCOUNT_COUPON) / 100}
    </div>
  );
};

export default Discount;
