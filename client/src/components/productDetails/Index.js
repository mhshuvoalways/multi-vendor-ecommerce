import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../store/actions/reviewAction";
import Details from "./Details";
import TabRoute from "./TabRoute";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

const Index = () => {
  const [state, setState] = useState("addition");

  const dispatch = useDispatch();
  const params = useParams();

  const reviewReducer = useSelector((store) => store.reviewReducer);

  const routeHandler = (value) => {
    setState(value);
  };

  useEffect(() => {
    dispatch(getReview(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="w-11/12 m-auto">
      <Details />
      <TabRoute routeHandler={routeHandler} reviewReducer={reviewReducer} />
      {state === "addition" && <AdditionalInfo />}
      {state === "review" && <Review reviewReducer={reviewReducer} />}
    </div>
  );
};

export default Index;
