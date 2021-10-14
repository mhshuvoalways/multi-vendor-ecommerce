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

const routers = () => {
  return (
    <div>
      <Router>
        <Home exact path="/" />
        <Shop exact path="/shop" />
        <Details exact path="/details" />
        <Cart exact path="/cart" />
        <Register exact path="/register" />
        <Login exact path="/login" />
        <MyAccount exact path="/my-account" />
        <Order exact path="/order" />
        <Address exact path="/address" />
        <AccountDetails exact path="/account-details" />
        <Contact exact path="/contact" />
      </Router>
    </div>
  );
};

export default routers;
