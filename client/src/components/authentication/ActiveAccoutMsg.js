import React from "react";
import { useSelector } from "react-redux";

const ActiveAccoutMsg = () => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <div className="mt-12 max-w-sm m-auto">
      <p className="shadow-md rounded-md p-10 text-center text-2xl">
        {userState.activeAccountMsg ||
          "Thanks for trying to active your account!"}
      </p>
    </div>
  );
};

export default ActiveAccoutMsg;
