import React from "react";
import Link from "./Link.js";

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
          <Link
            name="Code"
            href={codeLink}
            ariaLabel={`Link to Github page with the code for ${title} - opens in a new page`}
          />
          <Link
            name="Live website"
            href={demoLink}
            ariaLabel={`Link to website for ${title} - opens in a new page`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
