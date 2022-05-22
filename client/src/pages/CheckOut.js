import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import CheckoutComponent from "../components/checkout/Checkout";
import Footer from "../components/footer/Footer";

const Checkout = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "CHECKOUT"]} />
      <CheckoutComponent />
      <Footer />
    </div>
  );
};

export default Checkout;
