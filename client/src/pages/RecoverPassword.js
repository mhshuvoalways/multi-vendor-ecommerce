import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import RecoverPassword from "../components/authentication/RecoverPassword";
import Footer from "../components/footer/Footer";

const RecoverPasswordPage = () => {
  const store = useSelector((store) => store.userReducer.isAuthenticate);

  if (store) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navigation />
      <RecoverPassword />
      <Footer />
    </div>
  );
};

export default RecoverPasswordPage;
