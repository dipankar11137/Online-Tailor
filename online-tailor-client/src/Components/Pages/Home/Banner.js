import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../CSS/Banner.css';
import '../../CSS/PicStyle.css';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider className="pt-1" {...settings}>
      <div div className="relative    w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://www.deshigreetings.com/public/uploads/all/stbTbHHvGNyllgdLpPC4IXjMZuEmU2dFZIgWlyTA.webp"
          alt=""
        />
      </div>
      <div div className="relative   w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://static-01.daraz.com.bd/p/f4fd937d07fa698cacf70ac7b7d43a8a.jpg"
          alt=""
        />
      </div>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://deshiamazon.com/wp-content/uploads/2021/03/Indian-replica-Semi-stitched-Georgette-Anarkali-Gown-Dress-for-women-HHAAQ015-original.jpg"
          alt=""
        />
      </div>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://images.meesho.com/images/products/3150749/1_512.webp"
          alt=""
        />
      </div>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://4.imimg.com/data4/WV/AE/MY-31013271/girl-frocks-500x500.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Banner;
