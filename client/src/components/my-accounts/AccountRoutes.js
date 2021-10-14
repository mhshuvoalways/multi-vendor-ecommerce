import React from "react";
import { Link, navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";

const ActiveLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent && "text-purple-600",
      };
    }}
  />
);

const Accounts = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <ActiveLink to="/my-account">
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Dashboard
          </li>
        </ActiveLink>
        <ActiveLink to="/order">
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Order
          </li>
        </ActiveLink>
        <ActiveLink to="/address">
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Address
          </li>
        </ActiveLink>
        <ActiveLink to="/account-details">
          <li className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5">
            Account details
          </li>
        </ActiveLink>
        <li
          className="border border-gray-300 hover:bg-purple-600 hover:text-gray-100 py-2 px-5 cursor-pointer"
          onClick={() => dispatch(logout(navigate))}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Accounts;
