import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsShow from "../products/Products";

const Products = () => {
  const params = useParams();
  const productReducer = useSelector((el) => el.productReducer);

  const products = productReducer.products.filter(
    (product) => product.category === params.name
  );

  return (
    <div className="w-11/12 m-auto">
      <ProductsShow productReducer={productReducer} allProducts={products} />
    </div>
  );
};

export default Products;
