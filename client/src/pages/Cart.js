import React from "react";
import Navigation from "../components/Navigations/Navigation";
import CartComponent from "../components/Cart";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>CART</li>
        </ol>
      </nav>
      <CartComponent />
      <Footer />
    </div>
  );
};

export default Cart;
