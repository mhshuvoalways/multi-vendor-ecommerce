import React from "react";
import moment from "moment";

const OverView = ({
  ratingProducts,
  totalRating,
  vendor,
  products,
  reviewReducer,
}) => {
  const percents = (totalRating * 100) / (ratingProducts * 5);
  const avarageRating = totalRating / ratingProducts;
  return (
    <div className="mt-5 text-xl flex justify-between gap-5 flex-wrap">
      <div className="border p-5">
        <p>Products</p>
        <p>{products.length}</p>
      </div>
      <div className="border p-5">
        <p>Reviews</p>
        <p>{reviewReducer.reviews.length}</p>
      </div>
      <div className="border p-5">
        <p>Positive Rating</p>
        <p>{percents ? Math.round(percents) : 0}%</p>
      </div>
      <div className="border p-5">
        <p>Avarage Rating</p>
        <p>{avarageRating ? avarageRating.toFixed(2) : 0}</p>
      </div>
      <div className="border p-5">
        <p>Joined</p>
        <p>{vendor && moment(vendor.createdAt).format("L")}</p>
      </div>
    </div>
  );
};

export default OverView;
