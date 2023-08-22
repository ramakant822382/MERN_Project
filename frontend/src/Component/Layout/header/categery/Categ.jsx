import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoundedImageSlider.css"; // Create this CSS file for custom styling

const RoundedImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="rounded-image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="rounded-image-container" >
            <img src={image} alt={`Image ${index}`} className="rounded-image" />
          </div>
        ))}
          </Slider>
          
    </div>
  );
};

export default RoundedImageSlider;
