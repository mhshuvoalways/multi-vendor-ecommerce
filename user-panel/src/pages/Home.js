import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import SomeInfo from "../components/SomeInfo";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SomeInfo />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
