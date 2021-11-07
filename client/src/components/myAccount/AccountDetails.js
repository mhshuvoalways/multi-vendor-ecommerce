import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, avatarAdd } from "../../store/actions/userAction";
import Avatar from "../../assets/images/others/avatar.svg";

const AccoutDetails = () => {
  const [state, setState] = useState({
    avatar: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const avatarHandler = (event) => {
    setState({ ...state, avatar: event.target.files[0] });
  };

  useEffect(() => {
    userReducer.user &&
      setState({
        firstName: userReducer.user.firstName,
        lastName: userReducer.user.lastName,
        email: userReducer.user.email,
        phone: userReducer.user.phone,
      });
  }, [userReducer.user]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(state));
    const fd = new FormData();
    fd.append("avatar", state.avatar);
    dispatch(avatarAdd(fd));
  };

  return (
    <div className="w-4/5 max-w-lg m-auto">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-10">
          <label>
            {userReducer.user && userReducer.user.avatar ? (
              <div className="md:w-1/3 m-auto">
                <img
                  src={userReducer.user.avatar.url}
                  alt=""
                  className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={avatarHandler}
                />
              </div>
            ) : (
              <div className="md:w-1/3 m-auto">
                <img
                  src={Avatar}
                  alt=""
                  className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={avatarHandler}
                />
              </div>
            )}
          </label>
          <p className="border mt-4 border-gray-400"></p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="firstName"
              onChange={onChangeHandler}
              value={state.firstName}
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="lastName"
              onChange={onChangeHandler}
              value={state.lastName}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 opacity-70 cursor-not-allowed"
              type="email"
              name="email"
              value={state.email}
              onChange={onChangeHandler}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={state.phone}
              type="phone"
              name="phone"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Current password
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              value={state.currentPassword}
              name="currentPassword"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              New password
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              value={state.newPassword}
              name="newPassword"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Confirm new password
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              value={state.confirmPassword}
              name="confirmPassword"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccoutDetails;