import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, navigate } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";

import Favorite from "../../assets/images/icons/favorite.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccountPopUp = () => {
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={Favorite} alt="" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userState.isAuthenticate ? (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/my-account"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    My Account
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <p
                    className={classNames(
                      active ? "bg-gray-100 cursor-pointer" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    onClick={() => dispatch(logout(navigate))}
                  >
                    Logout
                  </p>
                )}
              </Menu.Item>
            </div>
          ) : (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/register"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Register
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/login"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Login
                  </Link>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AccountPopUp;
