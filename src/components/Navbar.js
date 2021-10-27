import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 150) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <header id="header" className={menuOpen ? "header active" : "header"}>
      <div className={navbarBackground ? "header__background" : null}>
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
      </div>
    </header>
  );
}

export default Navbar;
