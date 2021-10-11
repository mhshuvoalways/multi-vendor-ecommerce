import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

const routers = () => {
  return (
    <div>
      <Router>
        <Home exact path="/" />
        <Shop exact path="/shop" />
        <Details exact path="/details" />
        <Contact exact path="/contact" />
      </Router>
    </div>
  );
};

export default routers;
