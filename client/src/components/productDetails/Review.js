import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../store/actions/reviewAction";
import enableBtnAction from "../../store/actions/enableBtnAction";
import ReactStars from "react-rating-stars-component";
import Avatar from "../../assets/images/others/avatar.svg";

const Reviews = ({ reviewReducer }) => {
  const [state, setState] = useState({
    rating: 5,
    comments: "",
  });

  const dispatch = useDispatch();
  const params = useParams();
  const userReducer = useSelector((store) => store.userReducer);
  const btnReducer = useSelector((store) => store.btnReducer);

  const setting = {
    size: 20,
    value: state.rating,
    count: 5,
    activeColor: "red",
    a11y: true,
    isHalf: true,
    onChange: (newValue) => {
      setState({ ...state, rating: newValue });
    },
  };

  const onChangeHandler = (e) => {
    setState({ ...state, comments: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addReview(state, params.id));
    dispatch(enableBtnAction(false));
    setState({
      rating: 5,
      comments: "",
    });
  };

  return (
    <div className="flex gap-10 justify-between flex-wrap">
      <div className="md:w-2/4">
        {reviewReducer.reviews.map((el) => (
          <div
            className="flex gap-5 flex-wrap sm:flex-nowrap mb-10"
            key={el._id}
          >
            <img
              src={
                el.authorId && el.authorId.avatar
                  ? el.authorId && el.authorId.avatar.url
                  : Avatar
              }
              alt=""
              className="w-24 h-24 bg-gray-200 object-cover"
            />
            <div>
              <div className="flex gap-5 flex-wrap">
                <p className="text-base font-semibold">
                  {`${
                    el.authorId
                      ? el.authorId["firstName"] || el.authorId["username"]
                      : "User"
                  } ${
                    el.authorId ? el.authorId["lastName"] || "" : "has deleted"
                  }`}
                </p>
                <ReactStars
                  {...{
                    size: 20,
                    value: el.rating,
                    count: 5,
                    activeColor: "red",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
              </div>
              <p className="mt-2 text-justify">{el.comments}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-md p-5 md:w-1/3 md:h-1/3">
        <p className="text-base font-semibold mb-2">Add a review</p>
        <div className="flex gap-5 my-2">
          <p>Your rating:</p>
          <ReactStars {...setting} />
        </div>
        <div>
          <p>Your review:</p>
          <textarea
            placeholder="Your feedback is very important to us"
            className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 h-32 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={state.comments}
            onChange={onChangeHandler}
          />
          {btnReducer ? (
            userReducer.isAuthenticate ? (
              <button
                className="bg-purple-500 px-5 py-2 text-white hover:bg-gray-800"
                onClick={onSubmitHandler}
              >
                Submit
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-purple-500 px-5 py-2 text-white hover:bg-gray-800">
                  Submit
                </button>
              </Link>
            )
          ) : (
            <button
              className="bg-gray-500 opacity-50 cursor-not-allowed px-5 py-2 text-white hover:bg-gray-800"
              type="button"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
