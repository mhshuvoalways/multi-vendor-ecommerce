import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVendor } from "../../store/actions/vendorAction";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Loading from "../../components/utils/Loading";

const OurVendor = () => {
  const dispatch = useDispatch();

  const vendorReducer = useSelector((store) => store.vendorReducer);

  useEffect(() => {
    dispatch(getAllVendor());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          infinite: true,
          speed: 5000,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          infinite: true,
          speed: 5000,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 m-auto">
      {vendorReducer.isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {vendorReducer.allvendor.map((el) => (
            <Link
              to={`/shop/${el.author._id}`}
              className="border py-2 px-5 flex justify-between items-center"
            >
              <img
                src={el.image && el.image.url}
                alt=""
                className="w-14 h-14 mb-3"
              />
              <p className="font-semibold">{el.author.storeName}</p>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default OurVendor;
