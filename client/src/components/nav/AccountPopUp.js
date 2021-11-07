import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, navigate } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { logout, freshData } from "../../store/actions/userAction";
import { freshCart } from "../../store/actions/inCartAction";
import { freshProduct } from "../../store/actions/productAction";

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
          {userState.user && userState.user.avatar ? (
            <img
              src={userState.user.avatar.url}
              alt=""
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <i className="far fa-user h-8 w-8 rounded-full p-1 text-lg"></i>
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
                  <p
                    className={classNames(
                      active ? "bg-gray-100 cursor-pointer" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    onClick={() => {
                      dispatch(logout(navigate));
                      dispatch(freshData());
                      dispatch(freshCart());
                      dispatch(freshProduct());
                    }}
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
