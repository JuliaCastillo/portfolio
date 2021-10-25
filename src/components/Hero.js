import React from "react";
// import stroke from "../assets/img/brush-stroke-cropped.svg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="section_wrapper hero__content">
        {/* <img
          src={stroke}
          className="hero__image"
          alt="horizontal brush stroke"
        /> */}
        <h1>HI, I'M JULIA</h1>
        <p>
          <span>productivity nut, </span> <span>animal lover, </span>
          <span>front end developer</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
