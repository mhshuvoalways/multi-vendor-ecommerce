import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../store/actions/reviewAction";
import { getVendor } from "../../store/actions/vendorAction";
import Details from "./Details";
import TabRoute from "./TabRoute";
import VendorInfo from "./VendorInfo";
import Products from "../products/Products";
import Review from "./Review";

const Index = () => {
  const [state, setState] = useState("vendorinfo");
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();

  const reviewReducer = useSelector((store) => store.reviewReducer);
  const vendorReducer = useSelector((store) => store.vendorReducer);
  const productReducer = useSelector((store) => store.productReducer);

  const routeHandler = (value) => {
    setState(value);
  };

  useEffect(() => {
    dispatch(getReview(params.id));
    const products = productReducer.products.find((el) => el._id === params.id);
    setProduct(
      productReducer.products.filter(
        (el) => el.author._id === products.author._id
      )
    );
    if (products && products.author && products.author._id) {
      dispatch(getVendor(products.author._id));
    }
  }, [dispatch, params.id, productReducer.products]);

  return (
    <div className="w-11/12 m-auto">
      <Details />
      <TabRoute
        routeHandler={routeHandler}
        reviewReducer={reviewReducer}
        state={state}
      />
      {state === "vendorinfo" && <VendorInfo vendorReducer={vendorReducer} />}
      {state === "review" && <Review reviewReducer={reviewReducer} />}
      {state === "more" && (
        <Products
          productReducer={productReducer}
          allProducts={product}
          morePro={true}
        />
      )}
    </div>
  );
};

export default Index;
