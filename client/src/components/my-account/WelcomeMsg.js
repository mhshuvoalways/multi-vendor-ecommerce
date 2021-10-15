import React from "react";
import { Link } from "@reach/router";

const WelcomeMsg = () => {
  return (
    <div className="shadow-md rounded-md p-5">
      <p>
        Hello Shuvo (not Shuvo?
        <span className="cursor-pointer underline text-purple-500">
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
