import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Loading from "../components/utils/Loading";
import { getAllReviews } from "../store/actions/reviewAction";

const ClientFeedBack = () => {
  const dispatch = useDispatch();

  const reviewReducer = useSelector((store) => store.reviewReducer);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {reviewReducer.isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings} className="!w-auto">
          {[...reviewReducer.allreviews].reverse().map(
            (el) =>
              el.authorId.avatar &&
              el.comments && (
                <div className="bg-gray-100 py-5 h-72 shadow !w-5/12 mx-auto">
                  <img
                    src={el.authorId.avatar.url}
                    alt=""
                    className="w-28 h-28 m-auto rounded-full"
                  />
                  <p className="text-center text-xl mt-2 font-semibold">
                    {`${el.authorId.firstName} ${el.authorId.lastName}`}
                  </p>
                  <div className="flex justify-center mb-3">
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
                  <p className="text-center px-5 line-camp-2">{el.comments}</p>
                </div>
              )
          )}
        </Slider>
      )}
    </>
  );
};

export default ClientFeedBack;
