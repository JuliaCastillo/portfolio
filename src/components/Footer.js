import React from "react";
import Profiles from "./Profiles";

function Footer() {
  return (
    <section className="footer">
      <div className="section_wrapper">
        <Profiles />
        <p>
          Designed and developed with{" "}
          <a
            className="link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          by Julia
        </p>
      </div>
    </section>
  );
}

export default Footer;
