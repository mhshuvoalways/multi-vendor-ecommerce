import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import VendorRoutesCompo from "../components/vendorDashboard/VendorRoutes";
import Footer from "../components/footer/Footer";

const VendorRoutes = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "VENDOR DASHBOARD"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <VendorRoutesCompo />
        <div className="w-11/12 md:w-8/12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorRoutes;
