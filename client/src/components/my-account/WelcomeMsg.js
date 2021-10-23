import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccount, logout } from "../../store/actions/userAction";

const WelcomeMsg = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getMyAccount());
  }, [dispatch]);

  return (
    <div className="shadow-md rounded-md p-5">
      <p>
        Hello {userReducer.user.username} (not {userReducer.user.username}?
        <span
          className="cursor-pointer underline text-purple-500"
          onClick={() => dispatch(logout())}
        >
          {" "}
          Logout
        </span>
        )
      </p>
      <Link to="/dashboard">
        <button className="bg-purple-600 text-white p-2 mt-10 hover:bg-gray-900 text-xs md:text-sm">
          Go to Vendor Dashboard
        </button>
      </Link>
    </div>
  );
};

export default WelcomeMsg;
