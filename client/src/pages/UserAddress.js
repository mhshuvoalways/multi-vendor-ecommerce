import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import AccountRoutes from "../components/myAccount/AccountRoutes";
import UserAddressComponent from "../components/myAccount/UserAddress";
import Footer from "../components/Footer";

const Address = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "ADDRESS"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12">
          <UserAddressComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
