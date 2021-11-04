import React from "react";
import Navigation from "../components/Navigations/Navigation";
import WishList from "../components/WishList";
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
          <li>WISHLIST</li>
        </ol>
      </nav>
      <WishList />
      <Footer />
    </div>
  );
};

export default Cart;
