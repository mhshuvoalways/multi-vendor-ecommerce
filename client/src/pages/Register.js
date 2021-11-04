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
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>REGISTER</li>
        </ol>
      </nav>
      <RegisterComponent />
      <Footer />
    </div>
  );
};

export default Register;
