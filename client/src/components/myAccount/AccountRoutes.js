import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";
import clearReduxData from "../../store/actions/clearAction";

const Accounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ul>
      <NavLink
        to="dashboard"
        className={({ isActive }) => isActive && "text-purple-600"}
      >
        <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
          Dashboard
        </li>
      </NavLink>
      <NavLink
        to="order"
        className={({ isActive }) => isActive && "text-purple-600"}
      >
        <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
          Order
        </li>
      </NavLink>
      <NavLink
        to="address"
        className={({ isActive }) => isActive && "text-purple-600"}
      >
        <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
          Address
        </li>
      </NavLink>
      <NavLink
        to="details"
        className={({ isActive }) => isActive && "text-purple-600"}
      >
        <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
          Account details
        </li>
      </NavLink>
      <li
        className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5 cursor-pointer"
        onClick={() => {
          dispatch(logout(navigate));
          dispatch(clearReduxData());
        }}
      >
        Logout
      </li>
    </ul>
  );
};

export default Accounts;
