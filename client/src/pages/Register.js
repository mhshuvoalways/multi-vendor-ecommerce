import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "@reach/router";
import Navigation from "../components/Navigations/Navigation";
import RegisterComponent from "../components/authentication/Register";
import Footer from "../components/Footer";

const Register = () => {
  const store = useSelector((store) => store.userReducer.isAuthenticate);

  if (store) {
    return <Redirect to="/" noThrow />;
  }
  return (
    <div>
      <Navigation />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
