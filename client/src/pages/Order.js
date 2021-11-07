import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import AccountRoutes from "../components/myAccount/AccountRoutes";
import Order from "../components/myAccount/Order";
import Footer from "../components/Footer";

const MyAccount = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "MY ACCOUNT"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12">
          <Order />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
