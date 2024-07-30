import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GameCarousel = ({
  slidesToShow = 7,
  showArrows = false,
  showDots = false,
  autoplay = false,
  children,
}) => {
  const settings = {
    dots: showDots,
    arrows: showArrows,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    // centerPadding: "20px",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};
