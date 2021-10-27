import React from "react";

function Navbar() {
  return (
    <header id="header" className="header">
      <div className="header__wrapper">
        <a href="#" class="header__toggle" id="btnHamburger">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <nav className="header__nav">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
