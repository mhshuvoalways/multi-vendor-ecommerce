import React from "react";
import { Redirect } from "@reach/router";
import { useSelector } from "react-redux";

const ProtectRouter = ({ component: Component, ...rest }) =>
  useSelector((store) => store.userReducer.isAuthenticate) ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/login" />
  );

export default ProtectRouter;
