import React from "react";
import Navigation from "../components/nav/Navigation";
import ActiveAccountComponent from "../components/authentication/ActiveAccount";
import Footer from "../components/Footer";

const ActiveAccount = () => {
  return (
    <div>
      <Navigation />
      <ActiveAccountComponent />
      <Footer />
    </div>
  );
};

export default ActiveAccount;
