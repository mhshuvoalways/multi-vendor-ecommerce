import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import CheckoutMethodCompo from "../components/checkout/CheckoutMethod";
import Footer from "../components/Footer";

const CheckoutMethod = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "CHECKOUT"]} />
      <CheckoutMethodCompo />
      <Footer />
    </div>
  );
};

export default CheckoutMethod;
