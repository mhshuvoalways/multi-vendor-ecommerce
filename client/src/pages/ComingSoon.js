import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import VendorRoutesCompo from "../components/vendorDashboard/VendorRoutes";
import CommingSoon from "../components/CommingSoon";
import Footer from "../components/Footer";

const ComingSoonPage = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "VENDOR DASHBOARD"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <VendorRoutesCompo />
        <div className="w-8/12">
          <CommingSoon />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
