import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccount, logout } from "../../store/actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMyAccount());
  }, [dispatch]);

  return (
    <div className="shadow-md rounded-md p-5">
      <p>
        Hello {userReducer.user && userReducer.user.username} (not{" "}
        {userReducer.user && userReducer.user.username}?
        <span
          className="cursor-pointer underline text-purple-500"
          onClick={() => {
            dispatch(logout(navigate));
          }}
        >
          Logout
        </span>
        )
      </p>
      <Link to="/my-account">
        <button className="bg-purple-600 text-white p-2 mt-10 hover:bg-gray-900 text-xs md:text-sm">
          Go to My Account
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
