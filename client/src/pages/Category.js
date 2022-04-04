import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import Categories from "../components/categories/Products";
import Footer from "../components/Footer";

const Category = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "CATEGORY"]} />
      <Categories />
      <Footer />
    </div>
  );
};

export default Category;
