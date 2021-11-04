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
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>SHOP PRODUCT</li>
        </ol>
      </nav>
      <Details />
      <Footer />
    </div>
  );
};

export default Home;
