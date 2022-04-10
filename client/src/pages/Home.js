import React from "react";
import Navigation from "../components/nav/Navigation";
import Banner from "../components/Banner";
import SomeInfo from "../components/SomeInfo";
import SectionTitle from "../components/SectionTitle";
import Categories from "../components/categories/Categories";
import Products from "../components/products";
import Testimonials from "../components/Testimonials";
import OurVendor from "../components/ourVendor";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SomeInfo />
      <SectionTitle title="PRODUCTS CATEGORIES" />
      <Categories />
      <SectionTitle title="HIGHLIGHTS PRODUCTS" />
      <Products />
      <SectionTitle title="OUR VENDORS" />
      <OurVendor />
      <SectionTitle title="CLIENT REVIEW" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
