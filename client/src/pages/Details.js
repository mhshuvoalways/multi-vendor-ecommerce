import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/actions/productAction";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
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
      <PageLocation value={["HOME", "-/-", "SHOP PRODUCT"]} />
      <Details />
      <Footer />
    </div>
  );
};

export default Home;
