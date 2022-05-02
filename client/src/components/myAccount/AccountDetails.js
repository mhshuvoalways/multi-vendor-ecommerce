import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser, avatarAdd } from "../../store/actions/userAction";
import enableBtn from "../../store/actions/enableBtnAction";

const AccoutDetails = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const btnReducer = useSelector((state) => state.btnReducer);

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const avatarHandler = (event) => {
    setAvatar(event.target.files[0]);
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
    fd.append("avatar", avatar);
    if (avatar) {
      dispatch(avatarAdd(fd));
    }
    dispatch(enableBtn(false));
  };

  return (
    <div className="w-4/5 max-w-lg m-auto">
      <form>
        <div className="mb-10">
          <label>
            {(userReducer.user && userReducer.user.avatar) || avatar ? (
              <div className="flex justify-center">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt=""
                    className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer"
                  />
                ) : (
                  <img
                    src={userReducer.user.avatar.url}
                    alt=""
                    className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer"
                  />
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={avatarHandler}
                />
              </div>
            ) : (
              <div className="md:w-1/3 m-auto">
                <p className="md:h-32 md:w-32 h-32 w-32 rounded-full border-4 border-gray-400 cursor-pointer text-gray-100 font-bold text-5xl bg-gray-700 flex items-center justify-center">
                  {state.firstName && state.firstName.split("")[0]}
                </p>
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
        <div className="flex flex-wrap gap-3">
          <div className="md:flex md:items-center">
            {btnReducer ? (
              <button
                className="shadow hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                onClick={onSubmitHandler}
              >
                Save Changes
              </button>
            ) : (
              <button
                className="shadow hover:bg-gray-800 bg-gray-600 opacity-50 cursor-not-allowed focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Save Changes
              </button>
            )}
          </div>
          <div className="md:flex md:items-center">
            <Link to="/my-account/editpassword">
              <button
                className="shadow hover:bg-gray-800 bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Changes Password
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccoutDetails;
