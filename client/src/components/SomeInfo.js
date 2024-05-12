import React from "react";
import Bus from "../assets/images/somedetails/bus.png";
import Service24 from "../assets/images/somedetails/24.png";
import Sign from "../assets/images/somedetails/sign.png";
import Off from "../assets/images/somedetails/off.png";

const SomeInfo = () => {
  return (
    <div className="w-11/12 m-auto mt-20 flex gap-3 flex-wrap justify-between container">
      <div className="flex gap-4 items-center">
        <img src={Bus} alt="" />
        <div>
          <p className="font-bold text-xl">Free Shipping</p>
          <p>Free shipping on all order</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src={Service24} alt="" />
        <div>
          <p className="font-bold text-xl">Support 24/7</p>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src={Sign} alt="" />
        <div>
          <p className="font-bold text-xl">Money Return</p>
          <p>Return within 30 days for an exchange</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src={Off} alt="" />
        <div>
          <p className="font-bold text-xl">Order Discount</p>
          <p>5% discount on your order</p>
        </div>
      </div>
    </div>
  );
};

export default SomeInfo;
