import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import ProductTop from "../components/ProductTop";
import Products from "../components/products/Products";
import Footer from "../components/Footer";

const Shop = () => {
  const productReducer = useSelector((el) => el.productReducer);

  return (
    <div>
      <Navigation />
      <div>
        <PageLocation value={["HOME", "-/-", "SHOP"]} />
        <ProductTop />
        <Products
          productReducer={productReducer}
          allProducts={productReducer.products}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
