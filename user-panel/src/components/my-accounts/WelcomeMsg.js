import React from "react";

const WelcomeMsg = () => {
  return (
    <div className="shadow-md rounded-md p-5">
      <p>
        Hello Shuvo (not Shuvo?{" "}
        <span className="cursor-pointer underline text-purple-500">Logout</span>
        )
      </p>
      <button className="bg-purple-600 text-white p-2 mt-10 hover:bg-gray-900 text-xs md:text-sm">
        Go to Vendor Dashboard
      </button>
    </div>
  );
};

export default WelcomeMsg;
