import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../store/actions/reviewAction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/utils/Loading";

const ClientFeedBack = () => {
  const dispatch = useDispatch();

  const reviewReducer = useSelector((store) => store.reviewReducer);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
           slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-11/12 m-auto">
      {reviewReducer.isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {reviewReducer.allreviews &&
            reviewReducer.allreviews
              .reverse()
              .slice(0, 5)
              .map(
                (el) =>
                  el.authorId.avatar &&
                  el.comments && (
                    <div className="bg-gray-100 py-5">
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
                      <p className="text-center px-5">{el.comments}</p>
                    </div>
                  )
              )}
        </Slider>
      )}
    </div>
  );
};

export default ClientFeedBack;
