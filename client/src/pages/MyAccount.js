import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import AccountRoutes from "../components/myAccount/AccountRoutes";
import Footer from "../components/footer/Footer";

const MyAccount = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "MY ACCOUNT"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center container">
        <AccountRoutes />
        <div className="w-full md:w-8/12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
