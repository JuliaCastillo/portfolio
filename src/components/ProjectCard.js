import React from "react";

function ProjectCard({ title, description, codeLink, demoLink, image }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-buttons">
        <a href={codeLink} className="button">
          Code
        </a>
        <a href={demoLink} className="button">
          Live website
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;