import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const slideImages = [
  {
    url: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-chord-do-aanchal-india-tour-0-2023-5-16-t-13-44-6.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1687774101636_inoxunlrefilldesktop.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg",
    caption: "Slide 3",
  },
];

function Hero() {
  //   const setting = {
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-center ] mt-[6px]"
              //   style={{
              //     ...divStyle,
              //     backgroundImage: `url(${slideImage.url})`,
              //   }}
            >
              <img
                className="w-[99%] h-[320px] p-[10px]bg-cover rounded-[5px]"
                src={slideImage.url}
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Hero;
