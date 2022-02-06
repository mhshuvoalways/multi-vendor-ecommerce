import React from "react";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { logout, freshData } from "../../store/actions/userAction";
import { freshCart } from "../../store/actions/inCartAction";
import { freshProduct } from "../../store/actions/productAction";
import ActiveLink from "../utils/ActiveLink";

const VendorRoutes = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-800 p-5">
      <ul>
        <ActiveLink to="/vendor/dashboard">
          <li className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Dashboard
          </li>
        </ActiveLink>
        <ActiveLink to="/vendor/dashboard/products">
          <li className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Products
          </li>
        </ActiveLink>
        <ActiveLink to="/comingsoon">
          <li className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Visit Store
          </li>
        </ActiveLink>
        <ActiveLink to="/comingsoon">
          <li className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Settings
          </li>
        </ActiveLink>
        <li
          className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5 cursor-pointer"
          onClick={() => {
            dispatch(logout(navigate));
            dispatch(freshData());
            dispatch(freshCart());
            dispatch(freshProduct());
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default VendorRoutes;
