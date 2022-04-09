import React from "react";
import moment from "moment";

const OverView = ({
  ratingProducts,
  totalRating,
  vendor,
  products,
  reviewReducer,
  orderReducer,
}) => {
  const percents = (totalRating * 100) / (ratingProducts * 5);
  const avarageRating = totalRating / ratingProducts;
  return (
    <div className="mt-5 flex justify-between gap-5 flex-wrap">
      <div className="border p-5">
        <p>Products</p>
        <p className="text-xl">{products.length}</p>
      </div>
      <div className="border p-5">
        <p>Sellers</p>
        <p className="text-xl">{orderReducer.order.length}</p>
      </div>
      <div className="border p-5">
        <p>Reviews</p>
        <p className="text-xl">{reviewReducer.reviews.length}</p>
      </div>
      <div className="border p-5">
        <p>Positive Rating</p>
        <p className="text-xl">{percents ? Math.round(percents) : 0}%</p>
      </div>
      <div className="border p-5">
        <p>Avarage Rating</p>
        <p className="text-xl">
          {avarageRating ? avarageRating.toFixed(2) : 0}
        </p>
      </div>
      <div className="border p-5">
        <p>Joined</p>
        <p className="text-xl">
          {vendor && moment(vendor.createdAt).format("L")}
        </p>
      </div>
    </div>
  );
};

export default OverView;
