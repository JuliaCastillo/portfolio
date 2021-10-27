import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [navClass, setNavClass] = useState("header__nav fade-in");

  const toggleMenu = (e) => {
    e.preventDefault();
    if (menuOpen) {
      setNavClass("header__nav fade-out");
    } else {
      setNavClass("header__nav fade-in");
    }
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
        <a href="#" className="header__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <nav className={navClass} onClick={() => setMenuOpen(false)}>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
