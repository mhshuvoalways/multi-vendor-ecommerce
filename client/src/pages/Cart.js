import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import CartComponent from "../components/cart/Cart";
import Footer from "../components/footer/Footer";

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
