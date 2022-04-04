import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client1 from "../assets/images/clients/1.jpg";
import Client2 from "../assets/images/clients/2.jpg";
import Client3 from "../assets/images/clients/3.jpg";
import Client4 from "../assets/images/clients/4.jpg";

const ClientFeedBack = () => {
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
      <Slider {...settings}>
        <div className="bg-gray-100 py-5">
          <div className="w-28 m-auto">
            <img src={Client1} alt="" className="w-28 h-28 rounded-full" />
            <p className="text-center text-xl mb-4 mt-2 font-semibold">
              Emma Ava
            </p>
          </div>
          <p className="text-center">
            Loved the service! I urgently needed some stuffs and ordered it here
            and they delivered in less than an hour as promised! Thanks a lot
            for that.
          </p>
        </div>
        <div className="bg-gray-100 py-5">
          <div className="w-28 m-auto">
            <img src={Client2} alt="" className="w-28 h-28 rounded-full" />
            <p className="text-center text-xl mb-4 mt-2 font-semibold">
              Liam Noah
            </p>
          </div>
          <p className="text-center">
            Loved the service! I urgently needed some stuffs and ordered it here
            and they delivered in less than an hour as promised! Thanks a lot
            for that.
          </p>
        </div>
        <div className="bg-gray-100 py-5">
          <div className="w-28 m-auto">
            <img src={Client3} alt="" className="w-28 h-28 rounded-full" />
            <p className="text-center text-xl mb-4 mt-2 font-semibold">
              Isabella
            </p>
          </div>
          <p className="text-center">
            Loved the service! I urgently needed some stuffs and ordered it here
            and they delivered in less than an hour as promised! Thanks a lot
            for that.
          </p>
        </div>
        <div className="bg-gray-100 py-5">
          <div className="w-28 m-auto">
            <img src={Client4} alt="" className="w-28 h-28 rounded-full" />
            <p className="text-center text-xl mb-4 mt-2 font-semibold">
              William
            </p>
          </div>
          <p className="text-center">
            Loved the service! I urgently needed some stuffs and ordered it here
            and they delivered in less than an hour as promised! Thanks a lot
            for that.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ClientFeedBack;
