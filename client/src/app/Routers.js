import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "./RequireAuth";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ActiveAccount from "../pages/ActiveAccount";
import CheckMailMsg from "../pages/CheckMailMsg";
import FindMail from "../pages/FindMail";
import RecoverPassword from "../pages/RecoverPassword";

import Tostify from "../components/utils/Tostify";
import Home from "../pages/Home";
import Details from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import CheckoutMethod from "../pages/CheckoutMethod";
import InWish from "../pages/InWish";
import Category from "../pages/Category";
import ComingSoon from "../components/CommingSoon";
import Contact from "../pages/Contact";
import PageNotFound from "../components/NotFound404";

import MyAccount from "../pages/MyAccount";
import WelcomeMsg from "../components/myAccount/WelcomeMsg";
import Order from "../components/myAccount/Order";
import EditePassword from "../components/myAccount/EditPassword";
import UserAddress from "../components/myAccount/UserAddress";
import AccountDetails from "../components/myAccount/AccountDetails";

import VendorRoutes from "../pages/VendorRoutes";
import VendorDashboard from "../components/vendorDashboard/Dashboard";
import VendorProducts from "../components/vendorDashboard/VendorProducts";

const Routers = () => {
  return (
    <BrowserRouter>
      <Tostify />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<InWish />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="wishlist" element={<InWish />} />
        <Route path="active/:token" element={<ActiveAccount />} />
        <Route path="checkmsg" element={<CheckMailMsg />} />
        <Route path="findmail" element={<FindMail />} />
        <Route path="recoverpassword/:token" element={<RecoverPassword />} />
        <Route path="contact" element={<Contact />} />
        <Route path="findmail" element={<FindMail />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="checkout-method"
          element={
            <RequireAuth>
              <CheckoutMethod />
            </RequireAuth>
          }
        />
        <Route
          path="my-account"
          element={
            <RequireAuth>
              <MyAccount />
            </RequireAuth>
          }
        >
          <Route
            path=""
            element={
              <RequireAuth>
                <WelcomeMsg />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <WelcomeMsg />
              </RequireAuth>
            }
          />
          <Route
            path="order"
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          />
          <Route
            path="editpassword"
            element={
              <RequireAuth>
                <EditePassword />
              </RequireAuth>
            }
          />
          <Route
            path="address"
            element={
              <RequireAuth>
                <UserAddress />
              </RequireAuth>
            }
          />
          <Route
            path="details"
            element={
              <RequireAuth>
                <AccountDetails />
              </RequireAuth>
            }
          />
        </Route>

        <Route
          path="vendor"
          element={
            <RequireAuth>
              <VendorRoutes />
            </RequireAuth>
          }
        >
          <Route
            path=""
            element={
              <RequireAuth>
                <VendorDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <VendorDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="products"
            element={
              <RequireAuth>
                <VendorProducts />
              </RequireAuth>
            }
          />
          <Route
            path="comingsoon"
            element={
              <RequireAuth>
                <ComingSoon />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
