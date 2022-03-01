import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import ProductTop from "../components/ProductTop";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <Navigation />
      <div>
        <PageLocation value={["HOME", "-/-", "SHOP"]} />
        <ProductTop />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
