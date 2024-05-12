import React, { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clearReduxData from "../../store/actions/clearAction";
import { isAuthenticate } from "../../store/actions/userAction";
import { getCartItem } from "../../store/actions/inCartAction";
import { getWishItem } from "../../store/actions/wishListAction";
import CartPopUp from "./CartPopUp";
import AccountPopUp from "./AccountPopUp";
import Cart from "../../assets/images/icons/cart.png";
import Favorite from "../../assets/images/icons/favorite.png";

export default function Navigation() {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const inCartReducer = useSelector((state) => state.inCartReducer);
  const wishListReducer = useSelector((state) => state.wishListReducer);

  useEffect(() => {
    dispatch(isAuthenticate());
    if (!userReducer.isAuthenticate) {
      dispatch(clearReduxData());
    }
    dispatch(getCartItem());
    dispatch(getWishItem());
  }, [dispatch, userReducer.isAuthenticate]);

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <Fragment>
          <div className="w-11/12 m-auto container">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="mx-10 md:mx-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  to="/"
                  className="flex-shrink-0 flex items-center sm:text-3xl cursor-pointer text-xl"
                >
                  e-Shop
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                            : "text-gray-900 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-10">
                <div className="relative">
                  <NavLink to="/wishlist">
                    <img src={Favorite} alt="" className="px-3" />
                    <p className="absolute left-7 bottom-3 bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex justify-center items-center">
                      {wishListReducer.wishlist.length}
                    </p>
                  </NavLink>
                </div>
                {/* Start cart */}
                <Menu as="div" className="relative mt-1">
                  <div>
                    <Menu.Button>
                      <span className="sr-only">Open user menu</span>
                      <p className="absolute left-7 bottom-4 bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex justify-center items-center">
                        {inCartReducer.cart.length}
                      </p>
                      <img src={Cart} alt="" className="px-3" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute -right-16 sm:right-0 mt-4 w-72 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <CartPopUp />
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* End cart */}
                {/* Start Profile dropdown */}
                <AccountPopUp />
                {/* End Profile dropdown */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
}
