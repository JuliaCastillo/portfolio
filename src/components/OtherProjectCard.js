import React from "react";

function OtherProjectCard({ title, description, codeLink, demoLink }) {
  return (
    <div className="other-projects-card project-card">
      <h4>{title}</h4>
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
          Demo
        </a>
      </div>
    </div>
  );
}

export default OtherProjectCard;
