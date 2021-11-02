import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/actions/productAction";
import Navigation from "../components/Navigations/Navigation";
import Details from "../components/Details";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Details />
      <Footer />
    </div>
  );
};

export default Home;
