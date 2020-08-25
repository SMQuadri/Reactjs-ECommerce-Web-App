import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SlideView.css';
import Slider from 'react-slick';
import Slides from './Slides/Slides';
import AirJordan from './Slides/airJordan.jpg';
import NikeBlazers from './Slides/nikeBlazers.jpg';
import AirMax from './Slides/airMax.jpg';

const SlideView = () => {
    return (
      <div className="slideView__wrapper">
        <Slider className="slideView__slider"
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
        >

        <div className="slideView__page">
          <Slides 
            image={AirJordan}
            alternate="Air Jordan"
            shoes="Air Jordan Retros"
            off={40}
            pathTo="/men"
          />
        </div>
        <div className="slideView__page">
          <Slides 
            image={NikeBlazers}
            alternate="Nike Blazers"
            shoes="NIKE Blazers"
            off={25}
            pathTo="/women"
          />
        </div>
        <div className="slideView__page">
          <Slides 
            image={AirMax}
            alternate="Nike Air Max"
            shoes="NIKE Air Max"
            off={20}
            pathTo="/men"
          />
        </div>

        </Slider>
        .
      </div>
    );
}

export default SlideView;