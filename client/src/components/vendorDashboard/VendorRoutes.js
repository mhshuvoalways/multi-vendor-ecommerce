import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";
import clearReduxData from "../../store/actions/clearAction";

const VendorRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 p-5">
      <ul>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-gray-100"
          }
        >
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Dashboard
          </li>
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-gray-100"
          }
        >
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Products
          </li>
        </NavLink>
        <NavLink
          to="comingsoon"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-gray-100"
          }
        >
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Visit Store
          </li>
        </NavLink>
        <NavLink
          to="comingsoon"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-gray-100"
          }
        >
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Settings
          </li>
        </NavLink>
        <li
          className="border border-gray-300  text-gray-100 hover:bg-purple-600 hover:text-gray-100 py-2 px-5 cursor-pointer"
          onClick={() => {
            dispatch(logout(navigate));
            dispatch(clearReduxData());
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default VendorRoutes;
