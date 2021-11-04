import React from "react";
import Navigation from "../components/Navigations/Navigation";
import CheckoutComponent from "../components/Checkout";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div>
      <Navigation />
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>CHECKOUT</li>
        </ol>
      </nav>
      <CheckoutComponent />
      <Footer />
    </div>
  );
};

export default Checkout;
