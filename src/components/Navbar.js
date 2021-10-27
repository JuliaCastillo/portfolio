import React from "react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className={menuOpen ? "header active" : "header"}>
      {/* <div className="header__wrapper"> */}
      <a
        href="#"
        className="header__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </a>

      <nav className="header__nav" onClick={() => setMenuOpen(false)}>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default Navbar;
