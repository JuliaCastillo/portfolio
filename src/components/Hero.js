import React from "react";
import Profiles from "./Profiles";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="title-wrapper">
          <h1>HI, I'M JULIA</h1>
        </div>
        <p>
          <span>productivity nut, </span> <span>animal lover, </span>
          <span>front end developer</span>
        </p>
        <Profiles />
      </div>
    </section>
  );
}

export default Hero;
