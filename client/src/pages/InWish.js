import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import WishList from "../components/WishList";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "WISHTLIST"]} />
      <WishList />
      <Footer />
    </div>
  );
};

export default Cart;
