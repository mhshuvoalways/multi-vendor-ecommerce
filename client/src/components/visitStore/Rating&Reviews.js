import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";
import Avatar from "../../assets/images/others/avatar.svg";
import moment from "moment";

const RatingReviews = ({ reviewReducer }) => {
  const reverseReviews = [...reviewReducer.reviews];

  return (
    <div className="mt-20">
      <p className="text-2xl">
        Product Ratings and Reviews ({reviewReducer.reviews.length})
      </p>
      {!reviewReducer.isLoading ? (
        reviewReducer.reviews.length ? (
          reverseReviews.reverse().map((review) => (
            <div className="flex gap-10 mt-5 border p-5 flex-wrap">
              <div className="w-40 cursor-pointer">
                <img
                  src={
                    review.authorId.avatar ? review.authorId.avatar.url : Avatar
                  }
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <p className="text-base">
                  {review.authorId.firstName
                    ? (review.authorId.firstName && review.authorId.firstName) +
                      " " +
                      (review.authorId.lastName && review.authorId.lastName)
                    : review.authorId.storeName}
                </p>
              </div>
              <div>
                <Link
                  className="flex gap-2 items-center"
                  to={"/details/" + review.productId._id}
                >
                  <img
                    src={review.productId && review.productId.image[0].url}
                    alt=""
                    className="w-20 mb-2"
                  />
                  <p className="text-base mb-2">
                    {review.productId && review.productId.name}
                  </p>
                </Link>
                <ReactStars
                  {...{
                    size: 20,
                    value: review.rating,
                    count: 5,
                    activeColor: "red",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="mb-2">{review.comments}</p>
                <p className="text-xs">
                  {moment(review.createdAt).format("L")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl mt-5">No reviews yet!</p>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RatingReviews;
