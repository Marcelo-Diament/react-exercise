import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      accessibility: true,
      adaptativeHeight: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      className: 'simple-slider-slide',
      dots: true,
      draggable: true,
      easing: 'ease-in-out',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}