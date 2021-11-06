import React from "react";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
import VendorRoutesCompo from "../components/dashboard/VendorRoutes";
import VendorProducts from "../components/dashboard/VendorProducts";
import Footer from "../components/Footer";

const VendorRoutes = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "VENDOR ACCOUNT"]} />
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <VendorRoutesCompo />
        <div className="w-11/12 md:w-8/12">
          <VendorProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorRoutes;
