import React from 'react'
import living1 from "../images/living1.jpg";
import living2 from "../images/living2.jpg";
import living3 from "../images/living3.jpg";
import living4 from "../images/living4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/sliderSlick.css'

export default function SliderSlick() {
    var settings = {
        // variableWidth: true,
        dots: true,
        accessibility: true,
        arrows:true,
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
    <div className='slider-container'>
        <button type="button" class="slick-prev">Previous</button>
        <Slider {...settings} >
        <div className='slider-img-div'>
          {/* <img src={living1} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living2} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living3} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living4} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living1} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living2} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living3} alt="living1" id="slider-img" /> */}
          1
        </div>
        <div className='slider-img-div'>
          {/* <img src={living4} alt="living1" id="slider-img" /> */}
          1
        </div>
      </Slider>
    </div>
  )
}
