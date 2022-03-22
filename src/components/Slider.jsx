import React, { useState, useEffect } from "react";
// Data
import sliderData from "../data";
// Components
import Navbar from "./Navbar";

// Icons
import leftArrow from "../images/icon-angle-left.svg";
import rightArrow from "../images/icon-angle-right.svg";
import iconArrow from "../images/icon-arrow.svg";

import { Fade } from "react-reveal";

const Slider = () => {
  const [data, setData] = useState(sliderData[0]);

  console.log(data.id);
  const handleClick = (id) => {
    if (id > 2) {
      const newData = sliderData[0];
      setData(newData);
    } else {
      const newData = sliderData[id];
      setData(newData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleClick(data.id);
    }, 5000);
  }, [data]);

  return (
    <>
      <Navbar />
      <section className="slider">
          <div className="slider__left-section">
            <img
              className="slider__left-section__image"
              src={data.image}
              alt={data.title}
            />
          </div>
        <div className="slider__right-section">
            <div className="slider__right-section__content">
              <h1 className="slider__right-section__content-heading">
                {data.title}
              </h1>
              <p className="slider__right-section__content-paragraph">
                {data.desc}
              </p>
              <button className="slider__right-section__btn">
                Shop now
                <span className="arrow">
                  <img src={iconArrow} alt="IconArrow Shop button" />
                </span>
              </button>
            </div>
            <div className="slider__right-section__slider-btn">
              <button
                className="slider-btn"
                onClick={() => handleClick(data.id)}
              >
                <img src={leftArrow} alt="LeftArrow Slider" />
              </button>
              <button
                className="slider-btn"
                onClick={() => handleClick(data.id)}
              >
                <img src={rightArrow} alt="RightArrow Slider" />
              </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
