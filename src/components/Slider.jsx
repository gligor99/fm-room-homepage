import React, { useState, useEffect, useRef } from "react";
// Data
import sliderData from "../data";
// Components
import Navbar from "./Navbar";
// Icons
import leftArrow from "../images/icon-angle-left.svg";
import rightArrow from "../images/icon-angle-right.svg";
import iconArrow from "../images/icon-arrow.svg";

const Slider = () => {
  const [data] = useState(sliderData);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index !== 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(2);
    }
  };

  const nextSlide = () => {
    if (index !== data.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    const slider = setTimeout(nextSlide, 7000);
    return function () {
      clearTimeout(slider);
    };
  }, [index]);

  return (
    <>
      <Navbar />
      <section className="slider">
        <div className="slider__left-section">
          <img
            className="slider__left-section__image"
            src={data[index].image}
            alt={data[index].title}
          />
        </div>

        <div className="slider__right-section">
          <div className="slider__right-section__content">
            <h1 className="slider__right-section__content-heading">
              {data[index].title}
            </h1>
            <p className="slider__right-section__content-paragraph">
              {data[index].desc}
            </p>
            <button className="slider__right-section__btn">
              Shop now
              <span className="slider__right-section__btn-arrow">
                <img src={iconArrow} alt="IconArrow Shop button" />
              </span>
            </button>
          </div>
          <div className="slider__right-section__slider-btn">
            <button className="slider-btn" onClick={prevSlide}>
              <img src={leftArrow} alt="LeftArrow Slider" />
            </button>
            <button className="slider-btn" onClick={nextSlide}>
              <img src={rightArrow} alt="RightArrow Slider" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
