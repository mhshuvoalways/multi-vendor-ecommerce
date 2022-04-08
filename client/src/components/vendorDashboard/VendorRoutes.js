import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyVendor } from "../../store/actions/vendorAction";
import { logout } from "../../store/actions/userAction";
import clearReduxData from "../../store/actions/clearAction";

const VendorRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMyVendor());
  }, [dispatch]);

  const vendorReducer = useSelector((store) => store.vendorReducer);

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
        <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5 text-gray-100">
          <a
            href={`/shop/${
              vendorReducer.vendor &&
              vendorReducer.vendor.author &&
              vendorReducer.vendor.author._id
            }`}
            target="_blank"
            rel="noreferrer"
          >
            Visit Store
          </a>
        </li>
        <NavLink
          to="settings"
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
