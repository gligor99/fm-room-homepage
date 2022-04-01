import React from "react";
// import "./App.css";
import "./scss/main.scss";
import About from "./components/About";
import Slider from "./components/Slider";
import { Fade } from "react-reveal";

const App = () => {
  return (
    <section className="container">
      <Fade left>
        <Slider />
      </Fade>
      <Fade top>
        <About />
      </Fade>
    </section>
  );
};


export default App;
