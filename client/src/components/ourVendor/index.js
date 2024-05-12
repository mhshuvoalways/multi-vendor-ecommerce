import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../../components/utils/Loading";
import { getAllVendor } from "../../store/actions/vendorAction";

const OurVendor = () => {
  const dispatch = useDispatch();

  const vendorReducer = useSelector((store) => store.vendorReducer);

  useEffect(() => {
    dispatch(getAllVendor());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      {vendorReducer.isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {vendorReducer.allvendor.map((el) => (
            <Link
              to={`/shop/${el.author._id}`}
              className="border py-2 px-5 flex justify-between items-center !mx-5"
              key={el._id}
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
