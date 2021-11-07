import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import AccountRoutes from "../components/myAccount/AccountRoutes";
import AccountDetails from "../components/myAccount/AccountDetails";
import Footer from "../components/Footer";

const AccoutDetails = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "ACCOUNT"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12">
          <AccountDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccoutDetails;
