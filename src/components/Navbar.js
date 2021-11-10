import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

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
        <button className="header__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="header__nav fade-in" onClick={() => setMenuOpen(false)}>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
