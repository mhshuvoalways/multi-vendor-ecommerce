import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import HightLightProTab from "./HightLightProTab";
import Products from "./Products";

const Index = () => {
  const [allProducts, setallProducts] = useState([]);
  const [filterTab, setFilterTab] = useState("bestsellers");
  const productReducer = useSelector((el) => el.productReducer);

  const changeHandler = (value) => {
    setFilterTab(value);
  };

  AOS.init({
    once: true,
  });

  useEffect(() => {
    if (filterTab === "bestsellers") {
      const temp = [...productReducer.products];
      temp.sort((a, b) => {
        if (a.orderAppeared > b.orderAppeared) {
          return 1;
        } else if (a.orderAppeared < b.orderAppeared) {
          return -1;
        } else {
          return 0;
        }
      });
      setallProducts(temp);
    } else if (filterTab === "bestrated") {
      const temp = [...productReducer.products];
      temp.sort((a, b) => {
        if (a.reviewAppeared > b.reviewAppeared) {
          return 1;
        } else if (a.reviewAppeared < b.reviewAppeared) {
          return -1;
        } else {
          return 0;
        }
      });
      setallProducts(temp);
    } else if (filterTab === "newarrivals") {
      const temp = [...productReducer.products];
      setallProducts(temp);
    }
  }, [filterTab, productReducer.products]);

  return (
    <div className="w-11/12 m-auto">
      <HightLightProTab changeHandler={changeHandler} filterTab={filterTab} />
      <Products
        productReducer={productReducer}
        allProducts={allProducts}
        proFilter
      />
    </div>
  );
};

export default Index;
