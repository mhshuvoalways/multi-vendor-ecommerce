import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "@reach/router";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
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
      <PageLocation value={["HOME", "-/-", "REGISTER"]} />
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
