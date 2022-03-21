import React from "react";
import Navbar from "./Navbar";

const Slider = () => {
  return (
    <>
      <Navbar />
      <section className="slider">
        <div className="slider__left-section"></div>
        <div className="slider__right-section">
          <div className="slider__right-section__content">
            <h1>Discover innovative ways to decorate</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto, assumenda porro nemo eveniet, accusamus
              accusantium autem debitis maiores amet, ea explicabo at placeat
              obcaecati magni ab sequi mollitia ipsa. Quod ea exercitationem
              vero in aspernatur nisi laudantium excepturi? Suscipit maiores
              explicabo distinctio consectetur alias! Hic saepe voluptas, beatae
              amet nemo molestias ea omnis architecto quis impedit neque dolorum
              molestiae sequi in dolores porro. Autem rerum omnis suscipit minus
              reprehenderit neque quam natus tempore? Iste?
            </p>
            <button>Shop now</button>
          </div>
          <div className="slider__right-section__slider-btn">
            <button>Levo</button>
            <button>Desno</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
