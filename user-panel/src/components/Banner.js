import React from "react";
import Slider from "react-slick";
import Slider1 from "../assets/images/slider/slide-1.png";
import Slider2 from "../assets/images/slider/slide-2.png";
import Slider3 from "../assets/images/slider/slide-3.png";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Slider2} alt="" className="w-full"/>
      </div>
      <div>
        <img src={Slider1} alt="" className="w-full"/>
      </div>
      <div>
        <img src={Slider3} alt="" className="w-full"/>
      </div>
    </Slider>
  );
};

export default Banner;
