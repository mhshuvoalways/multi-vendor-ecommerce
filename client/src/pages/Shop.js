import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import Footer from "../components/footer/Footer";

const Shop = () => {
  return (
    <div>
      <Navigation />
      <div>
        <PageLocation value={["HOME", "-/-", "SHOP"]} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
