import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import LoginComponent from "../components/authentication/Login";
import Footer from "../components/Footer";

const Login = () => {
  const store = useSelector((store) => store.userReducer.isAuthenticate);

  if (store) {
    return <Navigate to="/" />;
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
