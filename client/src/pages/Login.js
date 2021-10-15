import React from "react";
import Navigation from "../components/Navigations/Navigation";
import LoginComponent from "../components/authentication/Login";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Navigation />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
