import React from "react";
import Navigation from "../components/nav/Navigation";
import RecoverPassword from "../components/authentication/RecoverPassword";
import Footer from "../components/footer/Footer";

const RecoverPasswordPage = () => {
  return (
    <div>
      <Navigation />
      <RecoverPassword />
      <Footer />
    </div>
  );
};

export default RecoverPasswordPage;
