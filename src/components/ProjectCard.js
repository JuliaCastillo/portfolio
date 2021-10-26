import React from "react";

function ProjectCard({
  title,
  description,
  codeLink,
  demoLink,
  image,
  //imageAlt,
}) {
  return (
    <div className="project-card featured-project-card">
      {/* <div className="card-image"> */}
      <img
        className="card-image"
        src={image}
        alt="Screenshot of the Edinburgh Hoppers website's homepage"
      />
      {/* </div> */}
      <div className="card-content">
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
    </div>
  );
}

export default ProjectCard;
