import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
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
        <Contact exact path="/contact" />
      </Router>
    </div>
  );
};

export default routers;
