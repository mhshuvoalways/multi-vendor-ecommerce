import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "@reach/router";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
import LoginComponent from "../components/authentication/Login";
import Footer from "../components/Footer";

const Login = () => {
  const store = useSelector((store) => store.userReducer.isAuthenticate);

  if (store) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "LOGIN"]} />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
