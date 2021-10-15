import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Order from "../pages/Order";
import Address from "../pages/Address";
import AccountDetails from "../pages/AccountDetails";
import Contact from "../pages/Contact";
// Vendor dashboard
import VendorRoutes from "../pages/VendorRoutes";
import VendorProducts from "../pages/VendorProducts";

const routers = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Shop path="/shop" />
        <Details path="/details" />
        <Cart path="/cart" />
        <Register path="/register" />
        <Login path="/login" />
        {/* My account */}
        <MyAccount path="/my-account" />
        <Order path="/my-account/order" />
        <Address path="/my-account/address" />
        <AccountDetails path="/my-account/details" />
        <Contact path="/contact" />
        {/* Vendor dashboard */}
        <VendorRoutes path="/dashboard" />
        <VendorProducts path="/dashboard/products" />
      </Router>
    </div>
  );
};

export default routers;
