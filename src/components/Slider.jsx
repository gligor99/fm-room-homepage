import React from "react";
import Navbar from "./Navbar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Slider = () => {
  return (
    <>
      <Navbar />
      <section className="slider">
        <div className="slider__left-section"></div>
        <div className="slider__right-section">
          <div className="slider__right-section__content">
            <h1 className="slider__right-section__content-heading">
              Discover innovative ways to decorate
            </h1>
            <p className="slider__right-section__content-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, aperiam ex, laboriosam aspernatur explicabo similique
              aliquam cum accusantium est quia, corporis suscipit a quidem
              labore esse impedit obcaecati iste. In cumque dolores nihil
              mollitia voluptatem perspiciatis, fuga repellat. Beatae veniam
              deserunt laborum unde doloribus, omnis distinctio eum sed soluta
              ex.
            </p>
            <button className="slider__right-section__btn">
              Shop now{" "}
              <span className="arrow">
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </div>
          <div className="slider__right-section__slider-btn">
            <button className="slider-btn">
              <FaAngleLeft className="slider-btn-icon" />
            </button>
            <button className="slider-btn">
              <FaAngleRight className="slider-btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
