import React from "react";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
import CheckoutComponent from "../components/checkout/Checkout";
import Footer from "../components/Footer";

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
