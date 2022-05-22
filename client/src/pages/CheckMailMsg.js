import React from "react";
import Navigation from "../components/nav/Navigation";
import CheckMailMsg from "../components/authentication/CheckMailMsg";
import Footer from "../components/footer/Footer";

const CheckMailMsgPage = () => {
  return (
    <div>
      <Navigation />
      <CheckMailMsg />
      <Footer />
    </div>
  );
};

export default CheckMailMsgPage;
