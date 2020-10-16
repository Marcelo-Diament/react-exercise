import React, { Component } from "react";
import Slider from "react-slick";
import slides from './slides.json';
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
      <div className="meu-sliderzin">
        <h2>Meu sliderzin</h2>
        <Slider {...settings}>
          {slides.map((item, index) => {
            return (
              <img
                key={index}
                src={item.imgSrc}
                alt={`Esse é o meu slide ${item.id + 1}`}
                height="auto"
                width="100%"
              />
            )
          })}
        </Slider>
      </div>
    );
  }
}