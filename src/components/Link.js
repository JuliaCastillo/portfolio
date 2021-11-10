import React from "react";

function Link({ name, href, ariaLabel }) {
  return (
    <a
      href={href}
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {name}
    </a>
  );
}

export default Link;
