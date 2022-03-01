import React from "react";
import Navigation from "../components/nav/Navigation";
import Banner from "../components/Banner";
import SomeInfo from "../components/SomeInfo";
import SectionTitle from "../components/SectionTitle";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SomeInfo />
      <SectionTitle />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
