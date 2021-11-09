import React from "react";

function ProjectCard({
  title,
  description,
  codeLink,
  demoLink,
  image,
  imageAlt,
}) {
  return (
    <div className="project-card featured-projects-card">
      <img className="card-image" src={image} alt="imageAlt" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-buttons">
          <a
            href={codeLink}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            href={demoLink}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
