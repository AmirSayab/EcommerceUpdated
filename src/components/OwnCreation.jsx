import React from "react";
import "../styles/ownCreation.css";
import living1 from "../images/living1.jpg";
import living2 from "../images/living2.jpg";
import living3 from "../images/living3.jpg";
import living4 from "../images/living4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OwnCreation() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="own-creation-container">
      <div className="own-creation-content">
        <h2 className="own-creation-content-bold">Our Own Creation</h2>
        <p className="own-creation-content-light">Designed in our studio</p>
        {/* <div className="own-creation-btn">
          <p>more</p>
          <button>prev</button>
          <button>next</button>
        </div> */}
      </div>

      <Slider {...settings} className="image-container">
        <div className="own-creation-img">
          <img src={living1} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living2} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living3} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living4} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living1} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living2} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living3} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living4} alt="living1" id="own-div-img" />
        </div>
      </Slider>
    </div>
  );
}
