import React from "react";
import Navigation from "../components/Navigations/Navigation";
import AccountRoutes from "../components/my-accounts/AccountRoutes";
import AddressComponent from "../components/my-accounts/Address";
import Footer from "../components/Footer";

const Address = () => {
  return (
    <div>
      <Navigation />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 p-10 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12 m-0 md:m-auto md:my-0">
          <AddressComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
