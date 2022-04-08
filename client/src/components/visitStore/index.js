import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVendor } from "../../store/actions/vendorAction";
import { getProducts } from "../../store/actions/productAction";
import { getAllReview } from "../../store/actions/reviewAction";
import Intro from "./Intro";
import Nav from "./Nav";
import OverView from "./OverView";
import RatingReviews from "./Rating&Reviews";
import Products from "../products/Products";

const Index = () => {
  const [state, setState] = useState("profile");
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getVendor(params.storeauthorid));
    dispatch(getAllReview(params.storeauthorid));
  }, [dispatch, params.storeauthorid]);

  const productReducer = useSelector((el) => el.productReducer);
  const vendorReducer = useSelector((store) => store.vendorReducer);
  const userReducer = useSelector((store) => store.userReducer);
  const reviewReducer = useSelector((store) => store.reviewReducer);

  const vendor = vendorReducer.vendor;

  useEffect(() => {
    const filterProducts = productReducer.products.filter(
      (product) => product.author._id === params.storeauthorid
    );
    setProducts(filterProducts);
  }, [params.storeauthorid, productReducer.products]);

  let ratingProducts = 0;
  let totalRating = 0;
  products.forEach((product) => {
    if (product.rating > 0) {
      ratingProducts++;
      totalRating = totalRating + product.rating;
    }
  });

  const handler = (value) => {
    setState(value);
  };

  return (
    <div className="w-11/12 m-auto">
      <Intro
        vendor={vendor}
        ratingProducts={ratingProducts}
        totalRating={totalRating}
        user={userReducer}
      />
      <Nav handler={handler} state={state} />
      {state === "profile" ? (
        <div>
          <OverView
            ratingProducts={ratingProducts}
            totalRating={totalRating}
            vendor={vendor}
            products={products}
            reviewReducer={reviewReducer}
          />
          <RatingReviews reviewReducer={reviewReducer} />
        </div>
      ) : (
        <div className="mt-10">
          <Products productReducer={productReducer} allProducts={products} />
        </div>
      )}
    </div>
  );
};

export default Index;
