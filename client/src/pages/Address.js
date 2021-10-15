import React from "react";
import Navigation from "../components/navigations/Navigation";
import AccountRoutes from "../components/my-account/AccountRoutes";
import AddressComponent from "../components/my-account/Address";
import Footer from "../components/Footer";

const Address = () => {
  return (
    <div>
      <Navigation />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12">
          <AddressComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
