import React from "react";
import { useDispatch } from "react-redux";
import { followVendor } from "../../store/actions/vendorAction";

const Intro = ({ user, vendor, ratingProducts, totalRating }) => {
  const dispatch = useDispatch();

  const findFollow =
    vendor.followers && vendor.followers.find((el) => el === user._id);

  const percents = (totalRating * 100) / (ratingProducts * 5);
  return (
    <div className="flex gap-20 justify-between border border-gray-600 p-5">
      <img src={vendor.image && vendor.image.url} alt="" className="w-24 border-2" />
      <div>
        <p className="text-xl">
          {vendor.author ? vendor.author.storeName : "User has been deleted"}
        </p>
        <p>{vendor.followers && vendor.followers.length} Followers</p>
        <p>{percents ? Math.round(percents) : 0}% Positive Seller Ratings</p>
      </div>

      <div
        className="hover:bg-gray-100 cursor-pointer p-2 h-16 border"
        onClick={() => dispatch(followVendor(vendor.author._id))}
      >
        {findFollow ? (
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
        )}
      </div>
    </div>
  );
};

export default Intro;
