import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "../data/projectsList";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section_wrapper">
        <div className="section_title">
          <h2>PROJECTS</h2>
        </div>
        {projectsList.map((project) => {
          return <ProjectCard {...project}></ProjectCard>;
        })}
      </div>
    </section>
  );
}

export default Projects;
