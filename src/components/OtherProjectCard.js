import React from "react";
import Link from "./Link.js";

function OtherProjectCard({ title, description, codeLink, demoLink }) {
  return (
    <div className="other-projects-card project-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="card-buttons">
        <Link
          name="Code"
          href={codeLink}
          ariaLabel="Link to Github page with the code for this project - opens in a new page"
        />
        <Link
          name="Demo"
          href={demoLink}
          ariaLabel="Link to website for this project - opens in a new page"
        />
      </div>
    </div>
  );
}

export default OtherProjectCard;
