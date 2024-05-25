import moment from "moment";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/others/avatar.svg";
import Loading from "../utils/Loading";

const RatingReviews = ({ reviewReducer }) => {
  const reverseReviews = [...reviewReducer.reviews];

  return (
    <div className="mt-20">
      <p className="text-2xl">
        Product Ratings and Reviews ({reviewReducer.reviews.length})
      </p>
      {!reviewReducer.isLoading ? (
        reviewReducer.reviews.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            {reverseReviews.reverse().map((review) => (
              <div
                className="gap-10 flex border p-5 justify-between"
                key={review._id}
              >
                <div className="w-2/12">
                  <img
                    src={
                      review.authorId.avatar
                        ? review.authorId.avatar.url
                        : Avatar
                    }
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="text-base ml-1">
                    {review.authorId.firstName
                      ? (review.authorId.firstName &&
                          review.authorId.firstName) +
                        " " +
                        (review.authorId.lastName && review.authorId.lastName)
                      : review.authorId.username}
                  </p>
                </div>
                <div className="w-10/12">
                  <Link
                    className="flex gap-2 items-center"
                    to={"/details/" + review.productId._id}
                  >
                    <img
                      src={
                        review.productId &&
                        review.productId.image &&
                        review.productId.image[0].url
                      }
                      alt=""
                      className="w-20 mb-2 object-cover"
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
            ))}
          </div>
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
