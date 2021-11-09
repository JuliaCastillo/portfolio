import React from "react";
import githubLogo from "../assets/img/github.svg";
import linkedinLogo from "../assets/img/linkedin.svg";
import emailLogo from "../assets/img/email.svg";

function Hero() {
  const githubLink = "https://github.com/JuliaCastillo";
  const linkedinLink = "https://www.linkedin.com/in/juliacastillotrujillo";
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
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub logo - Takes you to my GitHub profile (opens a new page)."
            />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedinLogo}
              alt="LinkedIn logo - Takes you to my LinkedIn profile (opens a new page)."
            />
          </a>
          <a href={emailLink} target="_blank" rel="noopener noreferrer">
            <img
              src={emailLogo}
              alt="Email logo - Takes you to your default email provider and opens up a new email with my email address as a recipient."
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
