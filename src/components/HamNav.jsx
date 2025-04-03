import React from "react";

export default function HamNav() {
  return (
    <div>
      <nav id="hamburger-nav">
        <div class="logo">Roshan Singh</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            {/* <!-- <li><a href="#about" onclick="toggleMenu()">About</a></li> --> */}
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
