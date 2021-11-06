import React from "react";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
import CartComponent from "../components/Cart";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "CART"]} />
      <CartComponent />
      <Footer />
    </div>
  );
};

export default Cart;
