import React, { useEffect } from "react";
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-11/12 m-auto">
      {reviewReducer.isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {reviewReducer.allreviews &&
            reviewReducer.allreviews.reverse().map(
              (el) =>
                el.rating === 5 &&
                el.authorId.avatar &&
                el.authorId.lastName &&
                el.comments && (
                  <div className="bg-gray-100 py-5">
                    <div className="w-28 m-auto">
                      <img
                        src={el.authorId.avatar.url}
                        alt=""
                        className="w-28 h-28 rounded-full"
                      />
                      <p className="text-center text-xl mb-4 mt-2 font-semibold">
                        {el.authorId.lastName}
                      </p>
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
