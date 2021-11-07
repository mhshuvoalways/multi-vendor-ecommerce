import React from "react";
import { Router } from "@reach/router";
import Tostify from "../components/utils/Tostify";
import ProtectRouter from "./ProtectRouter";
import Home from "../pages/Home";
import Details from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import InWish from "../pages/InWish";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Order from "../pages/Order";
import UserAddress from "../pages/UserAddress";
import AccountDetails from "../pages/AccountDetails";
import Contact from "../pages/Contact";
import VendorRoutes from "../pages/VendorRoutes";
import VendorProducts from "../pages/VendorProducts";

const Routers = () => {
  return (
    <div>
      <Tostify />
      <Router>
        <Home path="/" />
        <Shop path="/shop" />
        <Details path="/details/:id" />
        <Cart path="/cart" />
        <CheckOut path="/checkout" />
        <InWish path="/wishlist" />
        <Register path="/register" />
        <Login path="/login" />
        <Contact path="/contact" />
        <ProtectRouter component={MyAccount} path="/my-account" />
        <ProtectRouter component={Order} path="/my-account/order" />
        <ProtectRouter component={UserAddress} path="/my-account/address" />
        <ProtectRouter component={AccountDetails} path="/my-account/details" />
        <ProtectRouter component={VendorRoutes} path="/vendor/dashboard" />
        <ProtectRouter component={VendorProducts} path="/vendor/dashboard/products" />
      </Router>
    </div>
  );
};

export default Routers;
