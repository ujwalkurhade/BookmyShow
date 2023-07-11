import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mt-[10px] ">
      <Slider {...setting} className="">
        <div className="">
          <img
            className="w-[100%] h-[300px]"
            src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-chord-do-aanchal-india-tour-0-2023-5-16-t-13-44-6.jpg"
          />
        </div>
        <div>
          <img
            className="w-[100%] h-[300px]"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687774101636_inoxunlrefilldesktop.jpg"
          />
        </div>
        <div>
          <img
            className="w-[100%] h-[300px]"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
