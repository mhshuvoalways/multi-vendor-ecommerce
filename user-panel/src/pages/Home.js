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
      <p className="text-4xl mb-1 text-center mt-36">DAILY DEALS!</p>
      <p className="border-double border-4 border-purple-600 max-w-xs m-auto mb-10"></p>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
