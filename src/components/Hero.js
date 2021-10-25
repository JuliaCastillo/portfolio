import React from "react";
import githubLogo from "../assets/img/github.svg";
import linkedinLogo from "../assets/img/linkedin.svg";
import emailLogo from "../assets/img/email.svg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="section_wrapper hero__content">
        <h1>HI, I'M JULIA</h1>
        <p>
          <span>productivity nut, </span> <span>animal lover, </span>
          <span>front end developer</span>
        </p>

        <div className="hero__links">
          <a href="https://github.com/JuliaCastillo">
            <img src={githubLogo} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/julia-castillo-trujillo-1bb375172/">
            <img src={linkedinLogo} alt="LinkedIn logo" />
          </a>
          <a href="mailto:juliacastillotrujillo@gmail.com">
            <img src={emailLogo} alt="Email logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
