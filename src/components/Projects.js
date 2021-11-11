import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "../data/projectsList";
import OtherProjectCard from "./OtherProjectCard";
import { otherProjectsList } from "../data/otherProjectsList";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section_wrapper">
        <div className="section_title">
          <h2>Projects</h2>
        </div>
        <div className="featured-projects">
          {projectsList.map((project) => {
            return <ProjectCard {...project}></ProjectCard>;
          })}
        </div>

        <div className="section_title">
          <h3>Other projects</h3>
        </div>
        <div className="other-projects">
          {otherProjectsList.map((project) => {
            return <OtherProjectCard {...project}></OtherProjectCard>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
