import React from "react";
import githubLogo from "../assets/img/github.svg";
import linkedinLogo from "../assets/img/linkedin.svg";
import emailLogo from "../assets/img/email.svg";

function Hero() {
  const githubLink = "https://github.com/JuliaCastillo";
  const linkedinLink =
    "https://www.linkedin.com/in/julia-castillo-trujillo-1bb375172/";
  const emailLink = "mailto:juliacastillotrujillo@gmail.com";

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1>HI, I'M JULIA</h1>
        <p>
          <span>productivity nut, </span> <span>animal lover, </span>
          <span>front end developer</span>
        </p>

        <div className="hero__links">
          <a href={githubLink} target="_blank">
            <img src={githubLogo} alt="GitHub logo" />
          </a>
          <a href={linkedinLink} target="_blank">
            <img src={linkedinLogo} alt="LinkedIn logo" />
          </a>
          <a href={emailLink} target="_blank">
            <img src={emailLogo} alt="Email logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
