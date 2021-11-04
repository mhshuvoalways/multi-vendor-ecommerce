import React from "react";
import Navigation from "../components/Navigations/Navigation";
import AccountRoutes from "../components/my-account/AccountRoutes";
import WelcomeMsg from "../components/my-account/WelcomeMsg";
import Footer from "../components/Footer";

const MyAccount = () => {
  return (
    <div>
      <Navigation />
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>MY ACCOUNT</li>
        </ol>
      </nav>
      <div className="w-4/5 m-auto mt-20 bg-gray-200 py-16 flex gap-5 flex-wrap justify-center">
        <AccountRoutes />
        <div className="w-8/12">
          <WelcomeMsg />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
