import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";
import Avatar from "../../assets/images/others/avatar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccountPopUp = () => {
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-200 flex p-1 rounded-full">
          {userState.isAuthenticate ? (
            userState.user && userState.user.avatar ? (
              <img
                src={userState.user.avatar.url}
                alt=""
                className="h-8 w-8 rounded-full"
              />
            ) : userState.user && userState.user.firstName ? (
              <p className="md:h-8 md:w-8 h-8 w-8 rounded-full border-4 border-gray-400 cursor-pointer text-gray-100 font-bold bg-gray-700 flex items-center justify-center text-lg p-1">
                {userState.user &&
                  userState.user.firstName &&
                  userState.user.firstName.split("")[0]}
              </p>
            ) : (
              <img src={Avatar} alt="" className="h-8 w-8 rounded-full" />
            )
          ) : (
            <img src={Avatar} alt="" className="h-8 w-8 rounded-full" />
          )}
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
                  <a
                    href="/login"
                    className={classNames(
                      active ? "bg-gray-100 cursor-pointer" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          ) : (
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
