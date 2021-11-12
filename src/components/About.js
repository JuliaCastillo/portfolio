import React from "react";
import Skills from "./Skills";
import cv from "../data/CV-JuliaCastilloTrujillo.pdf";

function About() {
  return (
    <section id="about" className="about">
      <div className="section_wrapper about__content">
        <div className="section_title">
          <h2>About me</h2>
        </div>
        <div className="about__text">
          <p>
            Hello! My name is Julia Castillo Trujillo and I’m a developer from
            Spain passionate about web development, good design and
            accessibility.
          </p>
          <p>
            I recently graduated from the University of Edinburgh with a
            first-class degree in MInf Informatics, where I was able to work in
            multiple projects using different programming languages such as
            Java, C, Python, React Native, etc. However, after trying my hand at
            different languages, I found a passion for web development, and
            especifically, frontend development.
          </p>
          <p>
            In my spare time, I like to learn languages (currently studying
            Chinese), organise my life with Notion, find ways to be more
            productive and learn about web development and accessibility.
          </p>
          <a
            href={cv}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        <div className="section_title">
          <h3>Skills</h3>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
