import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-section">
          <div className="about__bg--1"></div>
        </div>
        <section className="about__info">
          <h2 className="about__heading">About our furniture</h2>
          <p className="about__text">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
        <div className="about__image-section">
          <div className="about__bg--2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
