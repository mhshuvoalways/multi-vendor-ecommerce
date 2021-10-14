import React from "react";
import Navigation from "../components/Navigations/Navigation";
import AccountRoutes from "../components/my-accounts/AccountRoutes";
import AccountDetails from "../components/my-accounts/AccountDetails";
import Footer from "../components/Footer";

const AccoutDetails = () => {
  return (
    <div>
      <Navigation />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 p-10 flex gap-10 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12 m-0 md:m-auto md:my-0">
          <AccountDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccoutDetails;