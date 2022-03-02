import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, navigate } from "@reach/router";
import { activeAccount } from "../../store/actions/userAction";
import ActiveAccoutMsg from "./ActiveAccoutMsg";

const ActiveAccount = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(activeAccount(params, navigate));
  }, [dispatch, params]);

  return <ActiveAccoutMsg />;
};

export default ActiveAccount;
