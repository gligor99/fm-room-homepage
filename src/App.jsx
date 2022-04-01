import React from "react";
// import "./App.css";
import "./scss/main.scss";
import About from "./components/About";
import Slider from "./components/Slider";

const App = () => {
  return (
    <section className="container">
      <Slider />
      <About />
    </section>
  );
};

// Adjust CSS more ...

export default App;
