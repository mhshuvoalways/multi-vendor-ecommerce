import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { followVendor } from "../../store/actions/vendorAction";

const Intro = ({ user, vendor, ratingProducts, totalRating }) => {
  const dispatch = useDispatch();

  const findFollow =
    vendor &&
    vendor.followers &&
    vendor.followers.find((el) => el === user.user._id);

  const percents = (totalRating * 100) / (ratingProducts * 5);
  return (
    <div className="flex gap-20 justify-between border border-gray-600 p-5">
      <img
        src={vendor && vendor.image && vendor.image.url}
        alt=""
        className="w-24 border-2 p-2"
      />
      <div>
        <p className="text-xl">
          {vendor && vendor.author && vendor.author.storeName}
        </p>
        <p>{vendor && vendor.followers && vendor.followers.length} Followers</p>
        <p>{percents ? Math.round(percents) : 0}% Positive Seller Ratings</p>
      </div>
      <div
        className="hover:bg-gray-100 cursor-pointer p-2 h-16 border"
        onClick={() =>
          dispatch(followVendor(vendor && vendor.author && vendor.author._id))
        }
      >
        {user.isAuthenticate ? (
          findFollow ? (
            <div>
              <i className="fa-solid fa-check text-green-500 text-xl m-auto"></i>
              <p className="text-green-500">FOLLOWING</p>
            </div>
          ) : (
            <div>
              <div className="flex item-center">
                <p className="text-red-500 text-2xl">+</p>
                <i className="fa-solid fa-store text-red-500 text-2xl"></i>
              </div>
              <p className="text-red-500">FOLLOW</p>
            </div>
          )
        ) : (
          <Link to="/login">
            <div className="flex item-center">
              <p className="text-red-500 text-2xl">+</p>
              <i className="fa-solid fa-store text-red-500 text-2xl"></i>
            </div>
            <p className="text-red-500">FOLLOW</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Intro;
