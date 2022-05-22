import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import RegisterComponent from "../components/authentication/Register";
import Footer from "../components/footer/Footer";

const Register = () => {
  const store = useSelector((store) => store.userReducer.isAuthenticate);

  if (store) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "REGISTER"]} />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
